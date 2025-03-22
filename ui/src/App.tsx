import { ReactFlow, Background, Controls } from "@xyflow/react";
import {useState} from 'react';
import { useGraphStore } from "./store/Zustand";
import "@xyflow/react/dist/style.css";
import { useShallow } from "zustand/shallow";
import { GraphState } from "./types/stateTypes";
import {Menu} from 'lucide-react';
import ToolMenu from './components/ToolMenu';

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

  const [isToolMenu, setIsToolMenu] = useState<boolean>(false);

  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onReconnect, onReconnectEnd, onReconnectStart} =
    useGraphStore(useShallow(selector));




  return (
    <div className="h-screen w-screen">
        <Menu className = {`z-10 absolute top-1 left-1 cursor-pointer transition-all ${isToolMenu ? "rotate-90 text-white" : "text-black"}`} onClick={() => setIsToolMenu(!isToolMenu)}/>
          <div className = {`absolute transition-all ${isToolMenu ? "opacity-100 z-2" : "opacity-0"}`}>
            <ToolMenu />
          </div>
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
        <Controls/>
      </ReactFlow>
    </div>
  );
};

export default App;
