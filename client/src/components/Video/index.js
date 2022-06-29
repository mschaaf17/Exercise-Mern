import React from 'react';
import video from '../../assets/video/IMG_4931.MOV'
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      setPlaying(true);
      var vid = document.getElementById("video1");
      setVideoTime(vid.duration);
    } else if (control === "pause") {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const fastForward = () => {
    videoRef.current.currentTime += 5;
  };

  const revert = () => {
    videoRef.current.currentTime -= 5;
  };

  window.setInterval(function () {
    setCurrentTime(videoRef.current?.currentTime);
    setProgress((videoRef.current?.currentTime / videoTime) * 100);
  }, 1000);

  return (
    <div className="app">
      <video
        id="video1"
        ref={videoRef}
        className="video"
        src="IMG_4931.MOV"
      ></video>

      <div className="controlsContainer">
        <div className="controls">
          <img
            onClick={revert}
            className="controlsIcon"
            alt=""
            src="/backward-5.svg"
          />
          {playing ? (
            <img
              onClick={() => videoHandler("pause")}
              className="controlsIcon--small"
              alt=""
              src="/pause.svg"
            />
          ) : (
            <img
              onClick={() => videoHandler("play")}
              className="controlsIcon--small"
              alt=""
              src="/play1.svg"
            />
          )}
          <img
            className="controlsIcon"
            onClick={fastForward}
            alt=""
            src="/forward-5.svg"
          />
        </div>
      </div>

      <div className="timecontrols">
        <p className="controlsTime">
          {Math.floor(currentTime / 60) +
            ":" +
            ("0" + Math.floor(currentTime % 60)).slice(-2)}
        </p>
        <div className="time_progressbarContainer">
          <div
            style={{ width: `${progress}%` }}
            className="time_progressBar"
          ></div>
        </div>
        <p className="controlsTime">
          {Math.floor(videoTime / 60) +
            ":" +
            ("0" + Math.floor(videoTime % 60)).slice(-2)}
        </p>
      </div>
    </div>
  );
}

const Video = () => {

  return (

    <div class="grid-container">
      <div class="grid-x grid-margin-x" data-equalizer="" data-equalize-on="medium" data-equalize-by-row="true" data-resize="20sa9g-eq" data-mutate="2ezo0l-eq" data-e="ul2cfj-e" data-events="mutate">

        <div class="block subtitleanchorblock medium-12 cell">

          <h2 id="VideoCollections">Video Collections </h2>
          <div className="flex-row">
            <video
              src={video}
              alt="Commercial Example"
              className="img-thumbnail mx-1"
            />
          </div>

          <!-- sub-title accent -->
          <div class="grid-x grid-margin-x ">
            <div class="small-3 medium-2 large-1 cell">
              <div class="accent-general-background title-accent"></div>
            </div>
          </div></div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 67px;">
              <h4 class="heading">Muscle Training</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="">

              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 67px;">
              <h4 class="heading">Stretching</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="">

              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">

          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 67px;">
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="">

              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 102px;">
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="">

              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 102px;">
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="Bridge Videos" target="" href="/">

              <span>Bridge Videos</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 102px;">
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="/">
              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">



          <div class="callout-block callout none Text ">
            <div data-equalizer-watch="" style="height: 92px;">
              <div class="label members-only solid none"><i class="fi-lock"></i> Members only</div>
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded Text " title="View Collection" target="" href="/">
              <span>View Collection</span>
            </a>
          </div>

        </div><div class="block calloutblock medium-4 cell">
          <div class="callout-block callout none blackText ">
            <div data-equalizer-watch="" style="height: 92px;">
              <h4 class="heading">Placeholder</h4>
              <p style="padding-bottom: 1em;"></p>
            </div>
            <a class="button primary-ghost-button  expanded blackText " title="View Collection" target="" href="/">
              <span>View Collection</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
