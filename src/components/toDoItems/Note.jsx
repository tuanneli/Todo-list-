import React, {useState} from 'react';
import classes from "./ToDoItems.module.css";

const Note = (props) => {
  let [editMode, setMode] = useState(false);
  let [noteText, setNoteText] = useState(props.text);

  const toggleEdit = () => {
    setMode(!editMode)
    if (editMode === true) {
      props.changeNoteThunkCreator(noteText, props.item.id);
    }
  }

  const onNoteChange = (event) => {
    let text = event.target.value;
    setNoteText(noteText = text)
    return noteText;
  }

  return (
    <>
      {!editMode &&
        <div
          onDoubleClick={toggleEdit}
          draggable={true}
          className={props.isChecked ? classes.isChecked : classes.textItem}>
          {noteText}
        </div>
      }
      {editMode &&
        <div
          draggable={true}
          className={props.isChecked ? classes.isChecked : classes.textItem}>
          <input
            onChange={onNoteChange}
            onBlur={toggleEdit}
            style={{border: "none"}}
            value={noteText}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        </div>
      }
    </>
  );
};

export default Note;