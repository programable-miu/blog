/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 100,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <div>
        <p style={{ margin: 0 }}>
          <strong>{author.name}</strong>
        </p>
        <p style={{ margin: 0 }}>
          <a href={`https://github.com/${social.github}`}>
            <FaGithubSquare size={`2em`} color={`#24292e`} />
          </a>
          <a href={`https://twitter.com/${social.twitter}`}>
            <FaTwitterSquare size={`2em`} color={`#55acee`} />
          </a>
        </p>
        <p style={{ margin: 0 }}>
          {author.summary}
        </p>
      </div>
    </div>
  )
}

export default Bio
