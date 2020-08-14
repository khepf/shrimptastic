import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import NewReleases from '../components/NewReleases'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

const IndexPage = ({data}) => {
  console.log('data', data);
  const { allMdx:{nodes:posts}} = data;

  return <Layout>
    <SEO title="Home"/>
    <Hero showPerson/>
    <NewReleases />
    {/* <Posts posts={posts} title="recently published posts"/> */}
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM,Do,YYYY")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
