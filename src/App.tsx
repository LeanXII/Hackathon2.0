import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import View from "./View.tsx";
import ToolMenu from "./components/ToolMenu.tsx";
import { useStore } from "./store/Zustand.tsx";

const App = () => {
  const isDragging = useStore((state) => state.isDragging);

  return (
    <>
      <ToolMenu />
      <TransformWrapper
        initialScale={1}
        initialPositionX={2}
        initialPositionY={10}
        disabled={isDragging}
      >
        <div className="min-h-screen">
          <TransformComponent>
            <View />
          </TransformComponent>
        </div>
      </TransformWrapper>
    </>
  );
};

export default App;
