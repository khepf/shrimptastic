import React from 'react'
import ReactPlayer from "react-player"
import Banner from '../components/Banner'





export default function NewReleases(props) {
    console.log('NR props', props);
  return <section className="posts">
    <h3 className="posts-title">NEW RELEASES</h3>
    <div className="posts-center">
      {/* new releases column */ }
      <article style={{ marginBottom: 30}}>
      <ReactPlayer
        url="https://youtu.be/B9Qk99RD-IU"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://youtu.be/QzGhbpYVGho"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://youtu.be/NdBhH8Jwll8"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://youtu.be/5DKZ-hISBCA"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://youtu.be/aS9KAkNSQZY"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      </article>
      {/* banner column */ }
      <article>
        <Banner />
      </article>
    </div>
  </section>
}