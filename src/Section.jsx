import React from 'react';
import { useState } from 'react';

export default function Section({img, header, quote, author, text}) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(!opened);
  }

  return (
    <div className='section'>
      <div className="main-section">
        <hr className="section-break"></hr>
        <div className="head-banner">
          <img src={img} alt="[head image 1]" className="head-banner-img"/>
          <div className="head-banner-title">{header}</div>
        </div>
        <div className={opened ? "arrow opened" : "arrow"} onClick={handleClick}>
          {opened ?
            <svg width="4rem" height="4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path stroke="#fff" strokeWidth="1" fill="white" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"/>
            </svg> 
           :
            <svg width="4rem" height="4rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path stroke="#fff" strokeWidth="1" fill="white" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
            </svg>
          }
        </div>
        {opened &&
          <div className="section-body">
            <div className="section-body-quote">
              <div className="section-body-quote-text"><i>{quote}</i></div>
              <div className="section-body-quote-author"><i>{author}</i></div>
            </div>
            <div className="section-body-text">{text}</div>
          </div>
        }
      </div>
    </div>
  )
}
