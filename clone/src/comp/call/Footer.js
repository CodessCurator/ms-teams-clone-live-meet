import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faVideoSlash,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
  faPlayCircle
} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import "./Footer.scss";
import {StopWatch} from "./Timer";

const Footer = ({
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,
    isVideo,
    toggleAudio,
    toggleVideo,
    disconnectCall,
  }) => {
    return (
      <div className="footer-item">
        <div className="left-item">
          <div className="icon-block">
            <b>LIVE MEET</b>
         
          </div>
        </div>
        <div className="center-item">
          <div
            className={`icon-block ${!isAudio ? "red-bg" : null}`}
            onClick={() => toggleAudio(!isAudio)}
          >
            <FontAwesomeIcon
              className="icon"
              icon={isAudio ? faMicrophone : faMicrophoneSlash}
            />
          </div>
          <div className="icon-block" onClick={disconnectCall}>
            <FontAwesomeIcon className="icon red" icon={faPhone} />
          </div>
          
          <div
            className={`icon-block ${!isVideo ? "red-bg" : null}`}
            onClick={() => toggleVideo(!isVideo)}
          >
          <FontAwesomeIcon
              className="icon"
              icon={isVideo ? faVideo : faVideoSlash}
            />
          </div>
        </div>
        <div className="right-item">
          <div className="icon-block">
            <StopWatch/>
          </div>
  
          {isPresenting ? (
            <div className="icon-block" onClick={stopScreenShare}>
              <FontAwesomeIcon className="icon red" icon={faDesktop} />
              <p className="title">Stop presenting</p>
            </div>
          ) : (
            <div className="icon-block" onClick={screenShare}>
              <FontAwesomeIcon className="icon red" icon={faDesktop} />
              <p className="title">Present now</p>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Footer;