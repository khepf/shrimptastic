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
        url="https://www.youtube.com/watch?v=T2ZepjQRyLs"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://youtu.be/GxzVu0Y7la8"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=n7AtiGoIBDk"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9F5FECpvBi8"
        width="320"
        height="180"
        style={{ marginBottom: 30}}
      />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9pmgFnOIYH4"
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