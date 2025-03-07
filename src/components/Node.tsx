import React from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { ItemTypes } from "../DndTypes.ts/Constants";

interface NodeProps {
  id: string;
}

const Node = React.forwardRef<HTMLDivElement, NodeProps>(({ id }, ref) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.NODE,
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [id]
  );

  return (
    <div
      ref={(node) => {
        if (node) {
          drag(node);
          if (ref) {
            (ref as React.RefObject<HTMLDivElement>).current = node;
          }
        }
      }}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}
      className="h-10 w-10 border border-amber-400"
    >
      
    </div>
  );
});

export default Node;
