import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({posts, title}) => {
  return <section className="posts">
    <h3 className="posts-title">{title}</h3>
    <div className="posts-center">
      {/* posts column */ }
      <article>
        <h5 className="posts-disclaimer"><em>Just to let you know, these posts contain affiliate links for which we may make a small 
          commission at no extra cost to you should you make a purchase. We're passionate about music 
          and Art in general. Our recommendations are genuine.</em></h5>
          
        {posts.map(post => {
          return <Post key={post.id} {...post} />
        })}
      </article>
    </div>
  </section>
}

export default Posts
