const dagre = require("@dagrejs/dagre");

type EObject = {
  v: string;
  w: string;
};

interface Nodes {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
}

interface Edges {
  id: string;
  source: string;
  target: string;
}

function generateGraph(args: string): Nodes[] | Edges[] | void {
  const g = new dagre.graphlib.Graph();

  // Set an object for the graph label
  g.setGraph({});

  // Default to assigning a new object as a label for each new edge.
  g.setDefaultEdgeLabel(function () {
    return {};
  });

  // Add nodes to the graph. The first argument is the node id. The second is
  // metadata about the node. In this case we're going to add labels to each of
  // our nodes.
  g.setNode("XVIII Corps", { label: "Corps", width: 140, height: 100 });
  g.setNode("82nd ABN DIV", { label: "Div", width: 140, height: 100 });
  g.setNode("2p", { label: "2panther", width: 140, height: 100 });
  g.setNode("1p", { label: "1panther", width: 140, height: 100 });
  g.setNode("1f", { label: "1fury", width: 140, height: 100 });
  g.setNode("2f", { label: "2fury", width: 140, height: 100 });

  // Add edges to the graph.
  g.setEdge("XVIII Corps", "82nd ABN DIV");
  g.setEdge("82nd ABN DIV", "2p");
  g.setEdge("82nd ABN DIV", "1p");
  g.setEdge("82nd ABN DIV", "1f");
  g.setEdge("82nd ABN DIV", "2f");

  g.setGraph({ rankdir: "TB" });

  dagre.layout(g);

  const nodes = [] as Nodes[];
  const edges = [] as Edges[];

  if (args === "nodes") {
    console.log(g.nodes())
    g.nodes().forEach(function (v: string) {

      nodes.push({
        id: v,
        position: { x: g.node(v).x, y: g.node(v).y },
        data: { label: v },
      });
    });
    return nodes;
  }

  if (args === "edges") {
    g.edges().forEach(function (e: EObject) {
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
