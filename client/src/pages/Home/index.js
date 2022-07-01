import React from 'react'
import { Link } from 'react-router-dom';
import Video1 from '../../assets/videos/video.mp4'
import Poster from '../../assets/images/poster.png'

import './home.css'
import muscle from './muscle.svg'


function Home() {
 return (
  <>
  <div id="homepage">
   <Link to="/"></Link>
   <video src={Video1} autoPlay loop muted poster={Poster} id="bg-video"/>
    <div id="home-title"> 
    <h1> STACKED</h1>
    <p>A new you is only a few clicks away.</p>
    </div>
    
    <div id="home-text">
    <h3>Find New Exercises.</h3>
    <h3>Get Stacked.</h3>
    {/* <h3>A healthier life is just a few clicks away.</h3> */}
     <div id="signup-btn">
    <Link to="/signup"><button>Let's Go <img id="arrow" src={muscle}></img></button></Link>
   </div>
   <div id="existing">
   <Link to="/login">Existing user? Login here</Link>
   </div>
   </div>
  </div>
  </>
 )
}

export default Home
