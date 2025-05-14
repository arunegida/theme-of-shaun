import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { tss } from "@/theme/typography";
const Typography = () => {
  return (
    <>
      {Object.entries(tss).map(([key, value], index) => {
        const Tag = key.toLowerCase();
        return (
          <div key={index} className="pt-10">
            <div className="flex justify-center items-center flex-col gap-8">
              <Card className="w-[55%] min-h-7/12">
                <CardHeader>
                  <CardTitle className="font-bold">{key}</CardTitle>
                </CardHeader>
                <Card className="m-auto p-5 w-[95%] h-[100%] bg-[#f9f9f9]">
                  <div>
                    {React.createElement(
                      Tag,
                      null,
                      "How can you choose a typeface?"
                    )}
                  </div>
                  <div className="flex flex-col font-mono text-[#637381]">
                    <span>fontSize: {value.fontSize}</span>
                    <span> lineHeight: {value.lineHeight}</span>
                    <span> fontWeight: {value.fontWeight}</span>
                  </div>
                </Card>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Typography;
