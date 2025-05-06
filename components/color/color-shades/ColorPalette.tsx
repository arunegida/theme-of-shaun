import { Palette, PanelLeft } from "lucide-react";

const ColorPalette = () => {
  return (
    <div>
      <div>
        <PanelLeft className="text-blue-600" />
      </div>
      <Palette className="text-black" />
    </div>
  );
};

export default ColorPalette;
