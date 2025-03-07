import {useRef} from 'react'
import Node from './components/Node'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function View(){
  const nodeRefs = useRef<HTMLDivElement | null>(null);
  return (
    <DndProvider backend={HTML5Backend}>

    <div className = "h-screen w-screen bg-neutral-800 flex items-start justify-center p-5 overflow-x-scroll">
      <span className = "text-white">
        {}
        <Node/>
      </span>
    </div>
    </DndProvider>
  )
}

