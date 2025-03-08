import { create } from "zustand";
import { GraphState} from "../types/stateTypes";
import  {getNodes} from '../utils/getNodes'
import {type Node} from '@xyflow/react'


const defaultNodes = await getNodes();

const useGraphStore = create<GraphState>((set) => ({
  nodes: defaultNodes,
  setNodes: (nodeInput: Node[]) => set({ nodes: nodeInput})
}));


export default useGraphStore;