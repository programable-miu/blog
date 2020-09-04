import React from "react"
import imageSrc from "../../content/assets/separator_image_line.png"

const SeparatorImageLine = () => {
  const size = 400
  const margin = 60

  return (
    <div style={{
        textAlign: 'center',
        marginTop: margin,
        marginBottom: margin,
        marginLeft: 'auto',
        marginRight: 'auto',
    }}>
      <img src={imageSrc} width={size} style={{ margin: 0 }} />
    </div>
  )
}

export default SeparatorImageLine
