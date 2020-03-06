/*
 * Copyright 2020 Akihiko Kusanagi
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 *
 * More information about this project is available at:
 *
 *    https://github.com/nagix/covid19-tokyo-graph
 */

var DATA_URL = 'https://cdn.jsdelivr.net/gh/tokyo-metropolitan-gov/covid19@master/data/data.json';

var initialNodes = [
	{ id: 'china', label: '中国', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' },
	{ id: 'unknown', label: '不明', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' },
	{ id: 'non-tokyo', label: '都外', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' }
];

var clusters = [
	{ id: 'yakatabune', label: '屋形船新年会クラスター', clusterLabelPos: 'top', style: 'fill: #00a040; opacity: 0.2;', nodes:[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 27] }
];

var boxColors = {
	'男性': {stroke: '#559', fill: '#ccf'},
	'女性': {stroke: '#955', fill: '#fcc'}
};

var loadJSON = function(url) {
	return new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();

		request.open('GET', url);
		request.onreadystatechange = function() {
			if (request.readyState === 4) {
				if (request.status === 200) {
					resolve(JSON.parse(request.response));
				} else {
					reject(Error(request.statusText));
				}
			}
		};
		request.send();
	});
};

var fullwidthToHalfwith = function(s) {
	return s.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	});
};

var tooltip = d3.select('body').append('div')
	.attr('class', 'tooltip')
	.style('opacity', 0);

loadJSON(DATA_URL).then(function(data) {

	var graph = new dagreD3.graphlib.Graph({ compound: true });
	graph.setGraph({ rankdir: 'LR' });

	initialNodes.forEach(function(node) {
		return graph.setNode(node.id, node);
	});

	data.patients.data.forEach(function(patient) {
		var id = patient['No'];
		var address = patient['居住地'];
		var age = patient['年代'];
		var sex = patient['性別'];
		var attr = patient['属性'] || '';
		var remarks = patient['備考'] || '';
		var supplement = patient['補足'] || '';
		var discharged = patient['退院'] || '';
		var dead = remarks.match(/死亡/);
		var colors = boxColors[sex];
		var sourceIds = (supplement.match(/[0-9０-９]+/g) || ['unknown'])
			.map(fullwidthToHalfwith)
			.map(function(sourceId) {
				return !isNaN(sourceId) && sourceId < id ? sourceId : 'unknown';
			});

		if (attr.match(/武漢|中国/)) {
			sourceIds = ['china'];
		} else if (supplement.match(/都外/)) {
			sourceIds = ['non-tokyo'];
		}

		graph.setNode(id, {
			id: id,
			labelType: 'html',
			label: '<div class="container">' +
				'<div class="id" style="background-color: ' + colors.stroke + ';">' + id + '</div>' +
				'<div class="label">' + age + sex + ' ' + attr + '</div>' +
				(discharged ? '<div class="check"></div>' : '') +
				'</div>',
			labelpos: 'l',
			width: 380,
			height: 30,
			rx: 5,
			ry: 5,
			style: 'stroke: ' + (dead ? '#f00' : colors.stroke) +
				'; stroke-width: ' + (dead ? 3 : 1) +
				'; fill: ' + colors.fill,
			description: 'No: ' + id +
				'<br>居住地: ' + address +
				'<br>年代: ' + age +
				'<br>性別: ' + sex +
				'<br>属性: ' + attr +
				'<br>備考: ' + remarks +
				'<br>補足: ' + supplement +
				'<br>退院: ' + discharged +
				'<br>発表日: ' + patient['short_date']
		});

		sourceIds.forEach(function(sourceId) {
			graph.setEdge(sourceId, id, {
				sourceId: sourceId < id ? sourceId : 'unknown',
				targetId: id,
				label: '',
				arrowhead: 'normal',
				lineInterpolate: 'monotone',
				lineTension: 0.0,
				style: 'stroke: #aaa; fill: none; stroke-width: 1.5px;',
				arrowheadStyle: 'fill: #aaa'
			});
		});

		clusters.forEach(function(cluster) {
			if (cluster.nodes.indexOf(id) !== -1) {
				graph.setParent(id, cluster.id)
			}
		});
	});

	clusters.forEach(function(cluster) {
		graph.setNode(cluster.id, cluster);
	});

	var svg = d3.select('#network');
	var inner = svg.select('g');

	var zoom = d3.behavior.zoom().on('zoom', function () {
		inner.attr('transform', 'translate(' + d3.event.translate + ')' +
			'scale(' + d3.event.scale + ')');
	});
	svg.call(zoom);

	var render = new dagreD3.render();
	render(inner, graph);

	inner.selectAll('g.node')
		.on('mouseover', function(d) {
			var description = graph.node(d).description;

			if (description) {
				tooltip.transition()
					.duration(200)
					.style('opacity', .9);
				tooltip.html(description)
					.style('left', (d3.event.pageX) + 'px')
					.style('top', (d3.event.pageY - 28) + 'px');
			}
		})
		.on('mouseout', function(d) {
			tooltip.transition()
				.duration(500)
				.style('opacity', 0);
		})

	var initialScale = 0.66;
	zoom
		.translate([(svg.attr('width') - graph.graph().width * initialScale) / 2, 20])
		.scale(initialScale)
		.event(svg);
	svg.attr('height', graph.graph().height * initialScale + 40);

	document.getElementById('last-update').innerHTML = data.patients.date;
});
