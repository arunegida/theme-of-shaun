import { Button } from "@/components/ui/button";
import { PanelLeft, Settings } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/components/context/ThemeContext";

const LayoutChange = () => {
  const { setTheme } = useTheme();
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Settings />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="relative border border-gray-400 rounded-md p-4 mt-4">
              <SheetTitle>
                <span className="absolute -top-3 left-1/7 -translate-x-1/2 bg-white px-2 text-sm text-black-600 font-bold">
                  Preset
                </span>
              </SheetTitle>
              <SheetDescription className="grid grid-cols-3">
                <Button
                  variant="ghost"
                  className="group w-full h-[3rem] bg-transparent border-none hover:bg-green-300"
                  onClick={() => setTheme("green")}
                >
                  <PanelLeft className="text-gray-700 group-hover:text-green-600" />
                </Button>
                <Button
                  variant="ghost"
                  className="group w-full h-[3rem] bg-transparent border-none hover:bg-red-300"
                  onClick={() => setTheme("red")}
                >
                  <PanelLeft className="group-hover:text-red-600" />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-[3rem] bg-transparent border-none"
                >
                  <PanelLeft />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-[3rem] bg-transparent border-none"
                >
                  <PanelLeft />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-[3rem] bg-transparent border-none"
                >
                  <PanelLeft />
                </Button>
                <Button
                  variant="ghost"
                  className="w-full h-[3rem] bg-transparent border-none"
                >
                  <PanelLeft />
                </Button>
              </SheetDescription>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LayoutChange;
