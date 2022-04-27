import React from 'react';
import { useState } from 'react';

export default function Paragraph({level, text}) {

  return (
    <div className={"main-section " + level}>
        <div className="section-body adj">
          <div className="section-body-text">{text}</div>
        </div>
    </div>
  )
}
