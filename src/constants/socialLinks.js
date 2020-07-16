import React from "react"
import {
  FaYoutubeSquare,
  FaDribbbleSquare,
  FaTwitterSquare,
  FaSpotify
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://youtube.com">
          <FaYoutubeSquare className="social-icon youtube-icon"></FaYoutubeSquare>
        </a>
      </li>
      <li>
        <a href="https://spotify.com">
          <FaSpotify className="social-icon spotify-icon"></FaSpotify>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaDribbbleSquare className="social-icon dribble-icon"></FaDribbbleSquare>
        </a>
      </li>
      <li>
        <a href="https://twitter.com">
          <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
        </a>
      </li>
      
    </ul>
  )
}
export default SocialLinks
