import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { colorPaletteSecondary, secondaryPalette } from "@/theme/colors";
import { useTheme } from "../context/ThemeContext";
import { colorPalettes, presets } from "@/theme/colors";
import { toast } from "sonner";

const ColorCard = () => {
  const palette: secondaryPalette = colorPaletteSecondary;
  let txtColor = "";
  const { theme } = useTheme();

  function CopyToClipBoard(hex: string) {
    navigator.clipboard
      .writeText(hex)
      .then(() => {
        toast.success("Copied: " + `${hex}`);
      })
      .catch(() => {
        toast.error("Something went wrong.");
      });
  }

  return (
    <div className="pt-10">
      <div className="flex justify-center items-center flex-col gap-8">
        <Card className="w-[50%] min-h-7/12">
          <CardHeader>
            <CardTitle className="font-bold">Primary</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] h-[100%] grid grid-flow-row grid-cols-3 p-6">
            {Object.entries(colorPalettes).map(([key, value], index) => {
              type Presets = Record<
                string,
                { name: string; var: string; hex: string; rgb: string }
              >;
              const color = (presets[theme as keyof typeof presets] as Presets)[
                key
              ];
              if (
                color.name == "Main" ||
                color.name == "Dark" ||
                color.name == "Darker"
              ) {
                txtColor = "text-white";
              } else {
                txtColor = "text-black";
              }
              return (
                <div
                  key={index}
                  className={`${value} ${txtColor} cursor-pointer`}
                  onClick={() => CopyToClipBoard(color.hex)}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">{color.name}</span>
                    <div className="pt-3">
                      <div className="font-thin text-[11px]">Var</div>
                      <div className="text-[12px]">{color.var}</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[11px]">Hex</div>
                      <div className="text-[12px]">{color.hex}</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[11px]">Rgb</div>
                      <div className="text-[12px]">{color.rgb}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        {Object.entries(palette).map(([colorType, shades]) => {
          return (
            <Card key={colorType} className="w-[50%] min-h-7/12">
              <CardHeader>
                <CardTitle className="font-bold">{colorType}</CardTitle>
              </CardHeader>
              <div
                className={`${shades.var} min-w-[70%] h-[100%] grid grid-flow-row grid-cols-3 p-6`}
              >
                {Object.entries(shades).map(([shadeName, shade]) => {
                  if (
                    shade.name == "Main" ||
                    shade.name == "Dark" ||
                    shade.name == "Darker"
                  ) {
                    txtColor = "text-white";
                  } else {
                    txtColor = "text-black";
                  }
                  return (
                    <div
                      key={shadeName}
                      onClick={() => CopyToClipBoard(shade.hex)}
                      className={`p-[1rem] text-xs ${shade.className} ${txtColor} cursor-pointer`}
                    >
                      <span className="font-bold text-xs">{shade.name}</span>
                      <div className="pt-3">
                        <div className="font-thin text-[11px]">Var</div>
                        <div className="text-[12px]">{shade.var}</div>
                      </div>
                      <div className="pt-3">
                        <div className="font-thin text-[11px]">Hex</div>
                        <div className="text-[12px]">{shade.hex}</div>
                      </div>
                      <div className="pt-3">
                        <div className="font-thin text-[11px]">Rgb</div>
                        <div className="text-[12px]">{shade.rgb}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ColorCard;
