import React from 'react'
import { Link } from 'react-router-dom';
import Video1 from '../assets/videos/video1.mp4'
import Video2 from '../assets/videos/video2.mp4'
import Video3 from '../assets/videos/video3.mp4'

// const videoArr = [Video1, Video2, Video3]

// function videoLoop() {

// }

function Home() {
 return (
  <div id="homepage">
   <Link to="/"></Link>
   <video src={Video1} autoPlay loop muted id="bg-video"/>
  </div>
 )
}

export default Home