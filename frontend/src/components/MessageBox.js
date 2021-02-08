import React from "react";

export default function MessageBox(props) {
  return (
    <div className={`message--${props.varient}`}>
      <h1>{props.varient}</h1>
    </div>
  )
} 