import { useState } from "react";
import { Menu } from "lucide-react";

export default function ToolMenu() {
  const [menuHidden, setMenuHidden] = useState<boolean>(true);

  return (
    <div className="absolute top-0 left-0 z-10">
      <Menu
        onClick={() => setMenuHidden(!menuHidden)}
        className={`cursor-pointer text-white relative z-20 transition-transform duration-300 ${
          !menuHidden ? "rotate-90" : "rotate-0"
        }`}
      />
      <div
        className={`transition-all duration-300 ease-in-out absolute top-0 left-0 ${
          !menuHidden ? "opacity-100 translate-x-0 " : "opacity-0 -translate-x-2"
        }`}
      >
        <div className="h-screen bg-neutral-600 w-[200px] rounded-lg p-4">
          <div className = "mt-10">
          Some tools
          </div>
        </div>
      </div>
    </div>
  );
}
