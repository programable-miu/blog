import Typography from "typography"
import Theme from "typography-theme-github"

Theme.overrideThemeStyles = () => {
  return {
    a: {
      color: "#1cA0F3",
    },
    "a:hover,a:active": {
      textDecoration: "underline dashed",
    },
    h1: {
      border: `none`,
    },
    h2: {
      marginTop: `60px`,
      border: `none`,
    },
  }
}

delete Theme.googleFonts

const typography = new Typography({
  ...Theme,
  headerFontFamily: [
    "Lucida Grande",
    "segoe UI",
    "ヒラギノ丸ゴ ProN",
    "Hiragino Maru Gothic ProN",
    "Meiryo",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "Lucida Grande",
    "segoe UI",
    "ヒラギノ丸ゴ ProN",
    "Hiragino Maru Gothic ProN",
    "Meiryo",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  scaleRatio: 1.5,
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
