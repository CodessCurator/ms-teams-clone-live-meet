import React from 'react'
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import './HomePage.scss';



export const HomePage = () => {
    const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

    return (
        <div className="hm">
            <nav>
                <div className="row clearfix">
                    <img src="data:image/png;base64,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" className="logo" />

                </div>
            </nav>
            <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4H4kk?ver=fb18&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" className="lo" />
            
            
            <div className="main-content-header">

                <h1> Welcome to Microsoft Teams </h1>
                <p> Sign in now to chat, meet, call,<br></br> and collaborate all in one place.</p>
                <a href="#init" className="btn btnf btn-sm-wide" onClick={startCall}>New Meeting</a>
                <a href="#" className="btn-sm-wide btn btni">
                <input type="text" placeholder="Enter Code"/> </a>
                <a href="#" className="btn btnh btn-sm-wide">
                    Join
                </a>
            </div>
        </div>
    )
}
