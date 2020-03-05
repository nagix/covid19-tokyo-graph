var nodes = [
    { id: "china", label: "中国", width: 100, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fff;" },
    { id: "unknown", label: "不明", width: 100, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fff;" },
    { id: "non-tokyo", label: "都外", width: 100, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fff;" },
    { id: "1", label: "40代男性 武漢市からの旅行者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "2", label: "30代女性 武漢市からの旅行者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "3", label: "30代女性 中国からのツアーコンダクター", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "4", label: "70代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "5", label: "50代女性 団体職員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "6", label: "70代男性 屋形船アルバイト", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "7", label: "80代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "8", label: "50代女性 タクシー運転手の同居者(看護師)", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "9", label: "50代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "10", label: "70代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "11", label: "70代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "12", label: "40代男性 屋形船従事者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "13", label: "60代女性 タクシー運転手の同居者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "14", label: "40代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "15", label: "60代男性 タクシー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "16", label: "30代男性 タクシー運転手の同居者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "17", label: "60代男性 医療従事者（医師）", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "18", label: "60代男性 ハイヤー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "19", label: "30代男性 ハイヤー運転手", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "20", label: "80代男性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #f00; stroke-width: 3; fill: #ccf;" },
    { id: "21", label: "20代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "22", label: "50代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "23", label: "70代男性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "24", label: "70代女性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "25", label: "70代女性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "26", label: "50代女性 パート職員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "27", label: "70代女性 自営業", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "28", label: "50代女性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "29", label: "60代男性 施設職員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "30", label: "40代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "31", label: "50代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "32", label: "30代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "33", label: "80代男性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "34", label: "70代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "35", label: "70代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "36", label: "60代女性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "37", label: "20代女性 医療従事者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "38", label: "50代女性 医療従事者", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "39", label: "70代男性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "40", label: "50代女性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "41", label: "80代女性 無職", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "42", label: "30代女性 施設職員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" },
    { id: "43", label: "50代男性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #ccf;" },
    { id: "44", label: "40代女性 会社員", width: 300, height: 30, rx: 5, ry: 5, style: "stroke: #333; fill: #fcc;" }
];

var edges = [
    { sourceId: "china", targetId: "1", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "china", targetId: "2", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "china", targetId: "3", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "4", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "5", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "6", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "7", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "8", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "9", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "10", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "11", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "12", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "13", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "14", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "15", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "4", targetId: "16", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "8", targetId: "17", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "18", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "14", targetId: "19", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "20", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "17", targetId: "21", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "22", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "23", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "23", targetId: "24", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "20", targetId: "25", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "26", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "8", targetId: "27", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "17", targetId: "27", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "17", targetId: "28", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "29", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "30", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "non-tokyo", targetId: "31", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "32", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "33", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "34", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "35", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "36", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "20", targetId: "37", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "25", targetId: "37", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "non-tokyo", targetId: "38", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "20", targetId: "39", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "40", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "41", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "42", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "43", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" },
    { sourceId: "unknown", targetId: "44", label: "", arrowhead: "normal", lineInterpolate: "monotone", lineTension: 0.0, style: "stroke: #333; fill: none; stroke-width: 1.5px;" }
];

var graph = new dagreD3.graphlib.Graph({ compound: true });
graph.setGraph({ rankdir: "LR" });

nodes.forEach(node => graph.setNode(node.id, node));
edges.forEach(edge => graph.setEdge(edge.sourceId, edge.targetId, edge));

var svg = d3.select("#network");
var inner = svg.select("g");

var zoom = d3.behavior.zoom().on("zoom", function () {
    inner.attr("transform", "translate(" + d3.event.translate + ")" +
        "scale(" + d3.event.scale + ")");
});
svg.call(zoom);

var render = new dagreD3.render();
render(inner, graph);

var initialScale = 0.60;
zoom
    .translate([(svg.attr("width") - graph.graph().width * initialScale) / 2, 20])
    .scale(initialScale)
    .event(svg);
svg.attr("height", graph.graph().height * initialScale + 40);
