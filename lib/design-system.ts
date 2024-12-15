export const colors = {
  primary: {
    red: "rgb(239, 68, 68)",
    redHover: "rgba(239, 68, 68, 0.5)",
  },
  theme: {
    light: {
      bg: "#f8f9fa",
      text: "rgb(31, 41, 55)",
      muted: "rgba(31, 41, 55, 0.5)",
    },
    dark: {
      bg: "#1a1f36",
      text: "rgb(209, 213, 219)",
      muted: "rgba(209, 213, 219, 0.5)",
    },
  },
  video: {
    light: {
      brightness: "1",
      contrast: "0.9",
      overlay: "rgba(240, 240, 245, 0.75)",
    },
    dark: {
      brightness: "0.85",
      contrast: "1.1",
      overlay: "rgba(16, 16, 32, 0.75)",
    },
  },
} as const;

export const typography = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
  },
  fontWeights: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  letterSpacing: {
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.5em",
  },
} as const;

export const spacing = {
  layout: {
    sectionPadding: "9rem",
    navigationOffset: "1.75rem",
  },
  components: {
    navigationLine: {
      height: "4rem",
      width: "0.125rem",
    },
  },
} as const;

export const animations = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.75,
  },
  transition: {
    default: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
    smooth: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
    spring: {
      type: "spring",
      stiffness: 200,
      damping: 25,
    },
  },
} as const;