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

var DATA_URL = 'https://cdn.jsdelivr.net/gh/tokyo-metropolitan-gov/covid19@development/data/data.json';

var initialNodes = [
	{ id: 'china', label: '中国', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' },
	{ id: 'unknown', label: '不明', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' },
	{ id: 'non-tokyo', label: '都外', width: 100, height: 30, rx: 5, ry: 5, style: 'stroke: #aaa; fill: #fff;' }
];

var boxColors = {
	'男性': {stroke: '#99c', fill: '#ccf'},
	'女性': {stroke: '#c99', fill: '#fcc'}
};

function loadJSON(url) {
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
}

function fullwidthToHalfwith(s) {
	return s.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
		return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
	});
}

loadJSON(DATA_URL).then(data => {

	var graph = new dagreD3.graphlib.Graph({ compound: true });
	graph.setGraph({ rankdir: 'LR' });

	initialNodes.forEach(node => graph.setNode(node.id, node));

	data.patients.data.forEach(patient => {
		var id = patient['No'];
		var attr = patient['属性'] || '';
		var remarks = patient['備考'] || '';
		var supplement = patient['補足'] || '';
		var dead = remarks.match(/死亡/);
		var colors = boxColors[patient['性別']];
		var sourceIds = (supplement.match(/[0-9０-９]+/g) || ['unknown'])
			.map(fullwidthToHalfwith)
			.map(sourceId => !isNaN(sourceId) && sourceId < id ? sourceId : 'unknown')

		if (attr.match(/武漢|中国/)) {
			sourceIds = ['china'];
		} else if (supplement.match(/都外/)) {
			sourceIds = ['non-tokyo'];
		}
		console.log(id, sourceIds)

		graph.setNode(id, {
			id: id,
			label: patient['年代'] + patient['性別'] + ' ' + patient['属性'],
			width: 300,
			height: 30,
			rx: 5,
			ry: 5,
			style: 'stroke: ' + (dead ? '#f00' : colors.stroke) +
				'; stroke-width: ' + (dead ? 3 : 1) +
				'; fill: ' + colors.fill
		});

		sourceIds.forEach(sourceId => {
			graph.setEdge(sourceId, id, {
				sourceId: sourceId < id ? sourceId : 'unknown',
				targetId: id,
				label: '',
				arrowhead: 'normal',
				lineInterpolate: 'monotone',
				lineTension: 0.0,
				style: 'stroke: #aaa; fill: none; stroke-width: 1.5px;'
			});
		});
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

	var initialScale = 0.60;
	zoom
		.translate([(svg.attr('width') - graph.graph().width * initialScale) / 2, 20])
		.scale(initialScale)
		.event(svg);
	svg.attr('height', graph.graph().height * initialScale + 40);

	document.getElementById('last-update').innerHTML = data.patients.date;
});
