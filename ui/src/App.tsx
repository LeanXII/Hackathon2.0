import {useCallback, useState} from 'react';
import { ReactFlow, Background, Controls, applyNodeChanges, type OnNodesChange, type Node } from "@xyflow/react";
import '@xyflow/react/dist/style.css';

import { getNodes } from './utils/getNodes';

const initialNodes = await getNodes();

const App = () => {

  const [nodes, setNodes] = useState<Node[]>(initialNodes)


  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes],
  );


  return (
    <div className = "h-screen w-screen">
      <ReactFlow nodes={nodes} onNodesChange={onNodesChange} >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;
