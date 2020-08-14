import React from "react"
import {
  FaYoutubeSquare,
  FaSpotify,
  FaTwitter
} from "react-icons/fa"
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://www.youtube.com/channel/UCM32ubo9Glp_85PJNYt14kQ"
        rel="noopener noreferrer" 
        target="_blank">
          <FaYoutubeSquare className="social-icon youtube-icon"></FaYoutubeSquare>
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/artist/6aOXJx6dF1oQ0GMGEYf5lJ?si=m1yD0w8QQmeE2gS_dQ1_jw"
        rel="noopener noreferrer" 
        target="_blank">
          <FaSpotify className="social-icon spotify-icon"></FaSpotify>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/shrimping_music"
        rel="noopener noreferrer" 
        target="_blank">
          <FaTwitter className="social-icon twitter-icon"></FaTwitter>
        </a>
      </li>
            
    </ul>
  )
}
export default SocialLinks
