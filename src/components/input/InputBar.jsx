import React from 'react';
import classes from "./InputBar.module.css";
import axios from "axios";

const InputBar = (props) => {
  const onTextChange = (event) => {
    let text = event.target.value;
    props.onTextChange(text);
  }

  const addText = () => {
    props.addTextThunkCreator(props.initialText);
  }

  return (
    <div className={classes.topBar}>
      <div onChange={onTextChange} className={classes.enterBox}>
        <input value={props.initialText}/>
        <button onClick={addText}>Add</button>
      </div>
    </div>
  );
};

export default InputBar;