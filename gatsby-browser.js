// using require because
// https://github.com/gatsbyjs/gatsby/issues/7148#issuecomment-428762319
const React = require("react")
const { ParallaxProvider } = require("react-scroll-parallax")

// custom typefaces
require("typeface-montserrat")
require("typeface-merriweather")

require("./content/assets/style.css")
require("./content/assets/prism-okaidia-custom.css")

exports.wrapRootElement = ({ element }) => {
  return (
    <ParallaxProvider>
      {element}
    </ParallaxProvider>
  )
}
