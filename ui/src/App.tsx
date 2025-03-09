import { ReactFlow, Background, Controls } from "@xyflow/react";
import { useGraphStore } from "./store/Zustand";
import "@xyflow/react/dist/style.css";
import { useShallow } from "zustand/shallow";
import { GraphState } from "./types/stateTypes";

const selector = (state: GraphState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  onReconnect: state.onReconnect,
  onReconnectStart: state.onReconnectStart,
  onReconnectEnd: state.onReconnectEnd

});

const App = () => {

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onReconnect, onReconnectEnd, onReconnectStart} =
    useGraphStore(useShallow(selector));




  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}

        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;
