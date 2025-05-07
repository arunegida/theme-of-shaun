import React from "react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { colorPaletteSecondary } from "./color-shades/colorPalette";
import { useTheme } from "../context/ThemeContext";
import { colorPalettes, presets } from "@/theme/colors";

const ColorCard = () => {
  const secondaryColorPalette = colorPaletteSecondary;
  const { theme } = useTheme();

  return (
    <div className="pt-10">
      <div className="flex justify-center items-center flex-col gap-8">
        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Primary</CardTitle>
          </CardHeader>

          <div className="min-w-[70%] flex p-6 flex-wrap">
            {Object.entries(colorPalettes).map(([key, value], index) => {
              const color = presets[theme as keyof typeof presets][key];
              return (
                <div
                  key={index}
                  className={`h-max w-[30%] ${value}`}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">{color.name}</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">{color.var}</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">{color.hex}</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">{color.rgb}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-primary-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-primary-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-primary-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-primary-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div> */}
        </Card>

        {Object.entries(secondaryColorPalette).map(([key, value], index) => {
          console.log(key, "key \n");
          return (
            <Card key={key} className="w-max">
              <CardHeader>
                <CardTitle className="font-bold">{key}</CardTitle>
              </CardHeader>
              <div className="min-w-[70%] flex p-6 flex-wrap">
                <div
                  className="h-max w-[30%]"
                  style={{
                    backgroundColor: "var(--palette-secondary-lighter)",
                  }}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">Lighter</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">
                        var(--palette-primary-lighter)
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">#C8FAD6</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">00 000 00</div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-max w-[30%]"
                  style={{ backgroundColor: "var(--palette-secondary-light)" }}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">Lighter</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">
                        var(--palette-primary-light)
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">#C8FAD6</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">00 000 00</div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-max w-[30%] text-white"
                  style={{ backgroundColor: "var(--palette-secondary-main)" }}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">Lighter</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">
                        var(--palette-primary-main)
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">#C8FAD6</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">00 000 00</div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-max w-[30%] text-white"
                  style={{ backgroundColor: "var(--palette-secondary-dark)" }}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">Lighter</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">
                        var(--palette-primary-dark)
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">#C8FAD6</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">00 000 00</div>
                    </div>
                  </div>
                </div>

                <div
                  className="h-max w-[30%] text-white"
                  style={{ backgroundColor: "var(--palette-secondary-darker)" }}
                >
                  <div className="p-[1rem] text-xs">
                    <span className="font-bold text-xs">Lighter</span>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Var</div>
                      <div className="text-[8px]">
                        var(--palette-primary-darker)
                      </div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Hex</div>
                      <div className="text-[8px]">#C8FAD6</div>
                    </div>
                    <div className="pt-3">
                      <div className="font-thin text-[8px]">Rgb</div>
                      <div className="text-[8px]">00 000 00</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}

        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Info</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] flex p-6 flex-wrap">
            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-info-lighter)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-lighter)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-info-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-info-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-info-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-info-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Success</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] flex p-6 flex-wrap">
            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-success-lighter)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-lighter)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-success-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-success-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-success-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-success-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Warning</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] flex p-6 flex-wrap">
            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-warning-lighter)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-lighter)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-warning-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Error</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] flex p-6 flex-wrap">
            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-error-lighter)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-lighter)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-error-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-error-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-error-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-error-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="w-max">
          <CardHeader>
            <CardTitle className="font-bold">Warning</CardTitle>
          </CardHeader>
          <div className="min-w-[70%] flex p-6 flex-wrap">
            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-warning-lighter)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-lighter)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%]"
              style={{ backgroundColor: "var(--palette-warning-light)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-light)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-main)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-main)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-dark)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">var(--palette-primary-dark)</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>

            <div
              className="h-max w-[30%] text-white"
              style={{ backgroundColor: "var(--palette-warning-darker)" }}
            >
              <div className="p-[1rem] text-xs">
                <span className="font-bold text-xs">Lighter</span>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Var</div>
                  <div className="text-[8px]">
                    var(--palette-primary-darker)
                  </div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Hex</div>
                  <div className="text-[8px]">#C8FAD6</div>
                </div>
                <div className="pt-3">
                  <div className="font-thin text-[8px]">Rgb</div>
                  <div className="text-[8px]">00 000 00</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ColorCard;
