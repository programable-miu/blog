import React, { useEffect }  from "react"
import { Link } from "gatsby"
import { withController } from "react-scroll-parallax"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children, parallaxController }) => {
  // https://github.com/jscottsmith/react-scroll-parallax/issues/67#issuecomment-522338783
  useEffect(() => {
    if (typeof window !== "undefined") {
      // https://github.com/jscottsmith/react-scroll-parallax/issues/65#issuecomment-558282801
      window.requestAnimationFrame(parallaxController.update)
    }
  }, [parallaxController, location])

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(32),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ textAlign: `center` }}>
        © 2020 programable-miu
      </footer>
    </div>
  )
}

export default withController(Layout)
