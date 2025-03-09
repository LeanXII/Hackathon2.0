import {type Node, type Edge, type OnNodesChange, type OnEdgesChange, type OnConnect, type OnReconnect} from '@xyflow/react'



export type AppNode = Node;

export type GraphState = {
  nodes: AppNode[];
  edges: Edge[];
  edgeReconnectSuccessful: boolean,
  onNodesChange: OnNodesChange<AppNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  onReconnectStart: () => void;
  onReconnect: OnReconnect;
  onReconnectEnd: (event: MouseEvent | TouchEvent, edge: Edge) => void;
  setNodes: (nodes: AppNode[]) => void;
  setEdges: (edges: Edge[]) => void;
}





