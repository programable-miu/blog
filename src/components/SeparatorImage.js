import React from "react"

import { ParallaxBanner } from "react-scroll-parallax"
import separatorImage from "../../content/assets/separator_image.jpg"

const SeparatorImage = () => {
  const size = 240
  const margin = 60

  return (
    <ParallaxBanner
      layers={[
        {
          image: separatorImage,
          amount: 0.5,
        },
      ]}
      style={{
        height: size,
        width: size,
        borderRadius: size,
        marginTop: margin,
        marginBottom: margin,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
  )
}

export default SeparatorImage
