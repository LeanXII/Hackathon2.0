const dagre = require("@dagrejs/dagre");

function generateGraph() {
const g = new dagre.graphlib.Graph();

// Set an object for the graph label
g.setGraph({});

// Default to assigning a new object as a label for each new edge.
g.setDefaultEdgeLabel(function() { return {}; });

// Add nodes to the graph. The first argument is the node id. The second is
// metadata about the node. In this case we're going to add labels to each of
// our nodes.
g.setNode("kspacey",    { label: "Kevin Spacey",  width: 140, height: 100 });
g.setNode("swilliams",  { label: "Saul Williams", width: 140, height: 100 });
g.setNode("bpitt",      { label: "Brad Pitt",     width: 140, height: 100 });
g.setNode("hford",      { label: "Harrison Ford", width: 140, height: 100 });
g.setNode("lwilson",    { label: "Luke Wilson",   width: 140, height: 100 });
g.setNode("kbacon",     { label: "Kevin Bacon",   width: 140, height: 100 });

// Add edges to the graph.
g.setEdge("kspacey",   "swilliams");
g.setEdge("swilliams", "kbacon");
g.setEdge("bpitt",     "kbacon");
g.setEdge("hford",     "lwilson");
g.setEdge("lwilson",   "kbacon");

g.setGraph({rankdir: "BT"})

dagre.layout(g);

g.nodes().forEach(function(v: string) {
  // console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
});


interface Nodes {
  id: string,
  position: {x: number, y: number},
  data: {label: string}
}


  const nodes = [] as Nodes[];

  g.nodes().forEach(function(v: string, index: number) {
    nodes.push({
      id: index.toString(),
      position: {x: g.node(v).x, y: g.node(v).y},
      data: {label: v}
    })
  })

  return nodes;
}


module.exports = generateGraph;