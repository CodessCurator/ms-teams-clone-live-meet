import { useState } from "react";
import "./Messenger.scss";
import { formatDate } from "./../../utils/helper";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faUserFriends,
  faCommentAlt,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

import "./Dictaphone";
import Dictaphone from "./Dictaphone";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




export const Messenger = ({ setIsMessenger, sendMsg, messageList }) => {
  const [msg, setMsg] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMsg(msg);
      setMsg("");
    }
  };

  const handleSendMsg = () => {
    console.log(msg, ' ', transcript);
    let actMessage = msg + transcript;
    sendMsg(actMessage);
    setMsg("");
    resetTranscript();
  };

  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Meeting details</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setIsMessenger(false);
          }}
        />
      </div>

      <div className="messenger-header-tabs">
        
        <div className="tab active">
          <FontAwesomeIcon className="icon" icon={faCommentAlt} />
          <p  className="s">Chat</p>
        </div>
      </div>

      <div className="chat-section">
        {messageList.map((item) => (
          <div key={item.time} className="chat-block">
            <div className="sender">
              {item.user} <small>{formatDate(item.time)}</small>
            </div>
            <p className="msg">{item.msg}</p>
          </div>
        ))}
      </div>
      <div className='chat-message-container'>
        <div className="send-msg-section">
          <input
            placeholder="Send a message to everyone"
            value={msg}
            onChange={(e) => handleChangeMsg(e)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
          <FontAwesomeIcon
            className="icon"
            icon={faPaperPlane}
            onClick={handleSendMsg}
          />
          <div className="speech-to-text">
            
            <button  className="btnmic" onClick={SpeechRecognition.startListening}>Start</button>
            <button className="btnmic" onClick={SpeechRecognition.stopListening}>Stop</button>
            <button className="btnmic" onClick={resetTranscript}>Reset</button>
            <p className="mic">Microphone: {listening ? 'on' : 'off'}</p>
            <p className="mic">{transcript}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
