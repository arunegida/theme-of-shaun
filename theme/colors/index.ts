// primary colors click on changes the theme
export const presets = {
    green: {
      lighter: {
        name: "Lighter",
        var: "--palette-primary-lighter",
        hex: "#C8FAD6",
        rgb: "200 250 214"
      },
      light: {
        name: "Light",
        var: "--palette-primary-light",
        hex: "#5BE49B",
        rgb: "91 228 155"
      },
      main: {
        name: "Main",
        var: "--palette-primary-main",
        hex: "#00A76F",
        rgb: "0 167 111"
      },
      dark: {
        name: "Dark",
        var: "--palette-primary-dark",
        hex: "#007867",
        rgb: "0 120 103"
      },
      darker: {
        name: "Darker",
        var: "--palette-primary-darker",
        hex: "#004B50",
        rgb: "0 75 80"
      }
    },
    red: {
      lighter: {
        name: "Lighter",
        var: "--palette-primary-lighter",
        hex: "#FAD6D6",
        rgb: "250 214 214"
      },
      light: {
        name: "Light",
        var: "--palette-primary-light",
        hex: "#f57c7c",
        rgb: "228 155 155"
      },
      main: {
        name: "Main",
        var: "--palette-primary-main",
        hex: "#d32f2f",
        rgb: "167 111 111"
      },
      dark: {
        name: "Dark",
        var: "--palette-primary-dark",
        hex: "#a62828",
        rgb: "120 103 103"
      },
      darker: {
        name: "Darker",
        var: "--palette-primary-darker",
        hex: "#7a1c1c",
        rgb: "75 80 80"
      }
    }
}
export const colorPalettes={lighter:"bg-primary-lighter", light:"bg-primary-light", main:"bg-primary-main", dark:"bg-primary-dark", darker:"bg-primary-darker"}

// others color
export const colorPaletteSecondary = {
  Secondary: {
    lighter: {
      className: "bg-secondary-lighter",
      name: "Lighter",
      var: "--palette-secondary-lighter",
      hex: "#EFD6FF",
      rgb: "239 214 255",
    },
    light: {
      className: "bg-secondary-light",
      name: "Light",
      var: "--palette-secondary-light",
      hex: "#C684FF",
      rgb: "198 132 255",
    },
    main: {
      className: "bg-secondary-main",
      name: "Main",
      var: "--palette-secondary-main",
      hex: "#8E33FF",
      rgb: "142 51 255",
    },
    dark: {
      className: "bg-secondary-dark",
      name: "Dark",
      var: "--palette-secondary-dark",
      hex: "#5119B7",
      rgb: "81 25 183",
    },
    darker: {
      className: "bg-secondary-darker",
      name: "Darker",
      var: "--palette-secondary-darker",
      hex: "#27097A",
      rgb: "39 9 122",
    },
  },
  Info: {
    lighter: {
      className: "bg-info-lighter",
      name: "Lighter",
      var: "--palette-info-lighter",
      hex: "#CAFDF5",
      rgb: "202 253 245",
    },
    light: {
      className: "bg-info-light",
      name: "Light",
      var: "--palette-info-light",
      hex: "#61F3F3",
      rgb: "97 243 243",
    },
    main: {
      className: "bg-info-main",
      name: "Main",
      var: "--palette-info-main",
      hex: "#00B8D9",
      rgb: "0 184 217",
    },
    dark: {
      className: "bg-info-dark",
      name: "Dark",
      var: "--palette-info-dark",
      hex: "#006C9C",
      rgb: "0 108 156",
    },
    darker: {
      className: "bg-info-darker",
      name: "Darker",
      var: "--palette-info-darker",
      hex: "#003768",
      rgb: "0 55 104",
    },
  },
  Success: {
    lighter: {
      className: "bg-success-lighter",
      name: "Lighter",
      var: "--palette-success-lighter",
      hex: "#D3FCD2",
      rgb: "211 252 210",
    },
    light: {
      className: "bg-success-light",
      name: "Light",
      var: "--palette-success-light",
      hex: "#77ED8B",
      rgb: "119 237 139",
    },
    main: {
      className: "bg-success-main",
      name: "Main",
      var: "--palette-success-main",
      hex: "#22C55E",
      rgb: "34 197 94",
    },
    dark: {
      className: "bg-success-dark",
      name: "Dark",
      var: "--palette-success-dark",
      hex: "#118D57",
      rgb: "17 141 87",
    },
    darker: {
      className: "bg-success-darker",
      name: "Darker",
      var: "--palette-success-darker",
      hex: "#065E49",
      rgb: "6 94 73",
    },
  },
  Warning: {
    lighter: {
      className: "bg-warning-lighter",
      name: "Lighter",
      var: "--palette-warning-lighter",
      hex: "#FFF5CC",
      rgb: "255 245 204",
    },
    light: {
      className: "bg-warning-light",
      name: "Light",
      var: "--palette-warning-light",
      hex: "#FFD666",
      rgb: "255 214 102",
    },
    main: {
      className: "bg-warning-main",
      name: "Main",
      var: "--palette-warning-main",
      hex: "#FFAB00",
      rgb: "255 171 0",
    },
    dark: {
      className: "bg-warning-dark",
      name: "Dark",
      var: "--palette-warning-dark",
      hex: "#B76E00",
      rgb: "183 110 0",
    },
    darker: {
      className: "bg-warning-darker",
      name: "Darker",
      var: "--palette-warning-darker",
      hex: "#7A4100",
      rgb: "122 65 0",
    },
  },
  Error: {
    lighter: {
      className: "bg-error-lighter",
      name: "Lighter",
      var: "--palette-error-lighter",
      hex: "#FFE9D5",
      rgb: "255 233 213",
    },
    light: {
      className: "bg-error-light",
      name: "Light",
      var: "--palette-error-light",
      hex: "#FFAC82",
      rgb: "255 172 130",
    },
    main: {
      className: "bg-error-main",
      name: "Main",
      var: "--palette-error-main",
      hex: "#FF5630",
      rgb: "255 86 48",
    },
    dark: {
      className: "bg-error-dark",
      name: "Dark",
      var: "--palette-error-dark",
      hex: "#B71D18",
      rgb: "183 29 24",
    },
    darker: {
      className: "bg-error-darker",
      name: "Darker",
      var: "--palette-error-darker",
      hex: "#7A0916",
      rgb: "122 9 22",
    },
  },
};


export type Shade = {
  name: string;
  var: string;
  hex: string;
  rgb: string;
  className: string,
};

export type ColorGroup = {
  [shadeName: string]: Shade;
};

export type secondaryPalette = {
  [colorType: string]: ColorGroup;
};





