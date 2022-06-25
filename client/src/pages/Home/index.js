import React from 'react'
import { Link } from 'react-router-dom';
import Video1 from '../../assets/videos/video1.mp4'
import Video2 from '../../assets/videos/video2.mp4'
import Video3 from '../../assets/videos/video3.mp4'
import './style.css'
import arrow from './arrow.svg'
import muscle from './muscle.svg'

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
   <div className="overlay"></div>
    <div id="home-title"> 
    <h1> STACKED</h1>
    <p>By Developers. For Developers.</p>
    </div>
    
    <div id="home-text">
    <h3>Code Full Stack.</h3>
    <h3>Get Fully Stacked.</h3>
    {/* <h3>A healthier life is just a few clicks away.</h3> */}
     <div id="signup-btn">
    <Link to="/signup"><button>Get Stacked <img id="arrow" src={muscle}></img></button></Link>
   </div>
   <div id="existing">
   <Link to="/login">Existing user? Login here</Link>
   </div>
   </div>
   
  </div>
 )
}

export default Home
