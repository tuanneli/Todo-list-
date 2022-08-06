import React from 'react';
import classes from "./InputBar.module.css";

const InputBar = (props) => {
  const onTextChange = (event) => {
    let text = event.target.value;
    props.onTextChange(text);
  }

  const addText = () => {
    props.onAddText();
  }

  return (
    <div>
      <div onChange={onTextChange} className={classes.enterBox}>
        <input value={props.initialText}/>
        <button onClick={addText}>Add</button>
      </div>
    </div>
  );
};

export default InputBar;