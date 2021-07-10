import React from 'react'
import './Urlpg.scss';


export const Urlpg = ({ setMeetInfoPopup, url }) => {



  return (
    <div>
      <div className="left">
        <span className="close" onClick={() => {
          setMeetInfoPopup(false);
        }}>X</span>
        <div className="ready"> Getting your meeting ready<hr />
          Share your link to add people</div>

        <div className="meet-link">
          <span>{url}</span>

          <button className="sharelink" onClick={() => navigator.clipboard.writeText(url)}> Copy</button>
        </div>
        <h4 > <a href="https://mail.google.com/mail/u/0/?tab=wm#inbox" target="_blank" class="mailme">Open Mail</a></h4>
      </div>
    
    </div>
  )
}


