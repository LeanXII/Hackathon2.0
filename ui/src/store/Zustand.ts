import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Edge,
  reconnectEdge,
} from "@xyflow/react";
import { type GraphState, type AppNode } from "../types/stateTypes";
import { getNodes } from "../utils/getNodes";
import { getEdges } from "../utils/getEdges";

const initialNodes: AppNode[] = await getNodes();
const initialEdges: Edge[] = await getEdges();

export const useGraphStore = create<GraphState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  edgeReconnectSuccessful: true,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
  onReconnectStart: () => {
    set({ edgeReconnectSuccessful: false });
  },
  onReconnect: (oldEdge, connection) => {
    set({
      edgeReconnectSuccessful: true,
      edges: reconnectEdge(oldEdge, connection, get().edges),
    });
  },
  onReconnectEnd: (_: MouseEvent | TouchEvent, edge: Edge) => {
    if (!get().edgeReconnectSuccessful) {
      set({
        edges: get().edges.filter((e) => e.id !== edge.id),
      });
    }
    set({ edgeReconnectSuccessful: true });
  },
  setNodes: (nodes) => {
    set({ nodes });
  },
  setEdges: (edges) => {
    set({ edges });
  },
}));

export default useGraphStore;
