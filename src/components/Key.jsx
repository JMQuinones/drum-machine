import React, { useState, useEffect } from "react";
function Key(props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);

  const handleClick = () => {
    const audio_element = document.getElementById(props.audio.keyTrigger);
    audio_element.play();
    props.setDisplay(props.audio.id);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === props.audio.keyCode) {
      setActive(!active);
      handleClick();
      props.setDisplay(props.audio.id);
      setTimeout(() => {
        setActive(!active);
      }, 200);
    }
  };

  return (
    <div
      className={`drum-pad btn btn-secondary px-3 ${active ? "active" : ""}`}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
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
