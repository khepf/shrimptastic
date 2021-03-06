import React from 'react'
import SocialLinks from '../../constants/socialLinks'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import Title from './Title'
import styled from 'styled-components'

const query = graphql`
  {
    person: file(relativePath: {eq: "ludwig-about.jpg"}) {
      childImageSharp {
        fixed (width: 100, height:100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    person2: file(relativePath: {eq: "falsetto-jaxxon.jpg"}) {
      childImageSharp {
        fixed (width: 100, height:100) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    person3: file(relativePath: {eq: "mr-squawk.jpg"}) {
      childImageSharp {
        fixed (width: 100, height:100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


const About = () => {
  const data = useStaticQuery(query)

  return <Wrapper>
    <Title title="the band" />
    <Image fixed={data.person.childImageSharp.fixed} className="img" />
    <h4>Ludwig Van Kubrick</h4>
    <p><em>Words, Keys</em></p>

    <Image fixed={data.person2.childImageSharp.fixed} className="img" />
    <h4>Falsetto Jaxxon</h4>
    <p><em>Strings, Riddles</em></p>

    <Image fixed={data.person3.childImageSharp.fixed} className="img" />
    <h4>Mr. Squawk</h4>
    <p><em>The Bass</em></p>
    <SocialLinks styleClass="banner-icons"/>
  </Wrapper>
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
  }
`
export default About
