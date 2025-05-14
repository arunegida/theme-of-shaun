export const tss = {
  H1: {
    fontSize: "64px",
    lineHeight: "1.25",
    fontWeight: "800",
  },
  H2: {
    fontSize: "48px",
    lineHeight: "1.33",
    fontWeight: "800",
  },
  H3: {
    fontSize: "32px",
    lineHeight: "1.50",
    fontWeight: "700",
  },
  H4: {
    fontSize: "24px",
    lineHeight: "1.50",
    fontWeight: "700",
  },
  H5: {
    fontSize: "19px",
    lineHeight: "1.47",
    fontWeight: "700",
  },
  H6: {
    fontSize: "18px",
    lineHeight: "1.56",
    fontWeight: "600",
  },
};
export type Tag = "H1" | "H2" | "H3" | "H4" | "H5" | "H6";

export type tagSpecificStyles = {
  [key in Tag]: {
    fontSize: string;
    fontWeight: string;
  };
};
