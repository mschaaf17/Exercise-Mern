import React from 'react'
import { Link } from 'react-router-dom';
import Video1 from '../../assets/videos/video1.mp4'
import Video2 from '../../assets/videos/video2.mp4'
import Video3 from '../../assets/videos/video3.mp4'
import './style.css'

// const videoArr = [Video1, Video2, Video3]

// function videoLoop() {
//  for (let i = 0; i < videoArr; i++) {
//   const currentVideo = videoArr[i]
//  }
// }

function Home() {
 return (
  <div id="homepage">
   <Link to="/"></Link>
   <video src={Video1} autoPlay loop muted id="bg-video"/>
   <div id="home-text">
    <h1>STACKED</h1>
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
     consequat. </h3>
   </div>
  </div>
 )
}

export default Home
