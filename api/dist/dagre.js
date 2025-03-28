"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dagre = require("@dagrejs/dagre");
function generateGraph({ outputType, newNode }) {
    const g = new dagre.graphlib.Graph();
    g.setGraph({});
    g.setDefaultEdgeLabel(function () {
        return {};
    });
    const internalNodes = [
        { id: "XVIII Corps", label: "Corps" },
        { id: "82nd ABN DIV", label: "Div" },
        { id: "2p", label: "2panther" },
        { id: "1p", label: "1panther" },
        { id: "1f", label: "1fury" },
        { id: "2f", label: "2fury" },
    ];
    if (newNode)
        internalNodes.push(newNode);
    internalNodes.forEach((node) => {
        g.setNode(node.id, { label: node.label, width: 120, height: 100 });
    });
    // g.setNode("XVIII Corps", { label: "Corps", width: 140, height: 100 });
    // g.setNode("82nd ABN DIV", { label: "Div", width: 140, height: 100 });
    // g.setNode("2p", { label: "2panther", width: 140, height: 100 });
    // g.setNode("1p", { label: "1panther", width: 140, height: 100 });
    // g.setNode("1f", { label: "1fury", width: 140, height: 100 });
    // g.setNode("2f", { label: "2fury", width: 140, height: 100 });
    // Add edges to the graph.
    g.setEdge("XVIII Corps", "82nd ABN DIV");
    g.setEdge("82nd ABN DIV", "2p");
    g.setEdge("82nd ABN DIV", "1p");
    g.setEdge("82nd ABN DIV", "1f");
    g.setEdge("82nd ABN DIV", "2f");
    g.setGraph({ rankdir: "TB" });
    dagre.layout(g);
    const nodes = [];
    const edges = [];
    if (outputType === "nodes") {
        g.nodes().forEach(function (v) {
            nodes.push({
                id: v,
                position: { x: g.node(v).x, y: g.node(v).y },
                data: { label: v },
            });
        });
        return nodes;
    }
    if (outputType === "edges") {
        g.edges().forEach(function (e) {
            edges.push({
                id: `e${e.v}-${e.w}`,
                source: `${e.v}`,
                target: `${e.w}`,
            });
        });
        return edges;
    }
}
module.exports = generateGraph;
// Node kspacey: {"label":"Kevin Spacey","width":144,"height":100,"x":80,"y":50}
// Node swilliams: {"label":"Saul Williams","width":160,"height":100,"x":80,"y":200}
// Node bpitt: {"label":"Brad Pitt","width":108,"height":100,"x":264,"y":200}
// Node hford: {"label":"Harrison Ford","width":168,"height":100,"x":440,"y":50}
// Node lwilson: {"label":"Luke Wilson","width":144,"height":100,"x":440,"y":200}
// Node kbacon: {"label":"Kevin Bacon","width":121,"height":100,"x":264,"y":350}
// Edge kspacey -> swilliams: {"points":[{"x":80,"y":100},{"x":80,"y":125},{"x":80,"y":150}]}
// Edge swilliams -> kbacon: {"points":[{"x":80,"y":250},{"x":80,"y":275},{"x":203.5,"y":325.3396739130435}]}
// Edge bpitt -> kbacon: {"points":[{"x":264,"y":250},{"x":264,"y":275},{"x":264,"y":300}]}
// Edge hford -> lwilson: {"points":[{"x":440,"y":100},{"x":440,"y":125},{"x":440,"y":150}]}
// Edge lwilson -> kbacon: {"points":[{"x":440,"y":250},{"x":440,"y":275},{"x":324.5,"y":324.21875}]}
