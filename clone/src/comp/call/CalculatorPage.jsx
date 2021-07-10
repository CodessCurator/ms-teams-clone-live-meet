import React from 'react'
import './Urlpg.scss';
import "./Messenger.scss";
import { Demo } from './Demo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  
} from "@fortawesome/free-solid-svg-icons";
export const CalculatorPage = ({ setIsCalculatorPage }) => {


  return (
    <div className="messenger-container">
      <div className="messenger-header">
        <h3>Calculator</h3>
        <FontAwesomeIcon
          className="icon"
          icon={faTimes}
          onClick={() => {
            setIsCalculatorPage(false);
          }}
        />
      </div>

     <Demo/>

      
      
    </div>
  )
}


