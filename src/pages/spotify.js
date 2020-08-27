import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
const Spotify = () => {
  return <Layout>
    <section className="success-page">
      <div className="page-center">
        <h2>Welcome to Spotify Search Page</h2>
        
        <Link to="/" className="btn">
          back home
        </Link>
      </div>
    </section>
  </Layout>
}

export default Spotify