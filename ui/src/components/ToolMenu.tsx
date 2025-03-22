import {useState, useRef} from 'react'
import { setNode } from '../utils/getNodes';
import useGraphStore from '../store/Zustand';

const ToolMenu = () => {
  const [isCreateNode, setIsCreateNode] = useState<boolean>(true);
  const nodeInputRef = useRef<HTMLInputElement | null>(null);

  const setNodes = useGraphStore((state) => state.setNodes);


  const handleCreateNode = async (): Promise<void> => {
    if (nodeInputRef.current)
    {
      const newNodes = await setNode({id: nodeInputRef.current.value, label: nodeInputRef.current.value})
      setNodes(newNodes);
    }
    else {
      console.error("must supply an id")
    }
  }

  return (
    <>
    <div className = "bg-neutral-500 w-96 h-[1000px] absolute top-1 left-1 p-4">
      <div className = "mt-20 text-white">
        Create a node
      </div>
      <button className = "p-1 rounded-lg border shadow-lg text-white w-22 bg-black cursor-pointer" onClick = {() => setIsCreateNode(!isCreateNode)}>
        Create
      </button>

      {/* Create node modal */}

    </div>
      <div className = {`absolute rounded-lg inset-0 w-screen h-screen flex justify-center items-center z-[-5]`}>
        <div className ={`bg-slate-600 w-96 h-96 p-2 transition-opacity flex rounded-lg ${isCreateNode ? "z-10 opacity-100" : "opacity-0 z-[-2]"}`}>
          <div className = "flex flex-col">

          <label htmlFor={"node-label"} className = "text-white">
            Input unit identifier
          </label>

          <input id = "node-label" type = "text" className = "border w-50 h-6 p-1 text-white" ref={(element)=>{
            if(element) nodeInputRef.current = element} }/>
          </div>
            <button className = "mt-auto ml-auto  p-1 border bg-blue-500 rounded-lg text-white" onClick={handleCreateNode}>
              Create
            </button>
        </div>
      </div>
    </>

  )
}

export default ToolMenu;