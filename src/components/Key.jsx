import React, { useState, useEffect } from "react";
function Key(props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    const audio_element = document.getElementById(props.audio.keyTrigger);
    audio_element.play();
    props.setDisplay(props.audio.id);
  };

  return (
    <div
      className={`drum-pad btn btn-secondary px-3 ${active ? "active" : ""}`}
      onClick={handleClick}
      id={props.audio.id}
    >
      <h1>{props.audio.keyTrigger}</h1>
      <audio
        className="clip"
        src={props.audio.url}
        id={props.audio.keyTrigger}
      />
    </div>
  );
}

export default Key;
