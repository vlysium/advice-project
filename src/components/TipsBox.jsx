import "../styles/Tips.scss";
import React from 'react'

function TipsBox(props) {
  return (
    <>
      <div className="tips_box">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default TipsBox