import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  {
    person: file(relativePath: {eq: "person.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    },
    shrimp_music: file(relativePath: {eq: "shrimp_music.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showPerson }) => {
  const {shrimp_music} = useStaticQuery(query)
  return <header className="hero">
    {showPerson && (
      <Image fluid={shrimp_music.childImageSharp.fluid} className="hero-person" />
    )}
    
  </header>
}

export default Hero
