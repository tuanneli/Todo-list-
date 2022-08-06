import React from 'react';
import classes from "./ToDoItems.module.css";

const ToDoItems = (props) => {
  const Text = (props) => {
    return (
      <div className={classes.toDoItem}>
        <div
          className={props.isChecked ? classes.isChecked : classes.textItem}>
          {props.text}
        </div>
        <div className={classes.checkButton}>
          <button onClick={() => {props.onIsChecked(props.userId)}}>✓</button>
        </div>
        <div className={classes.deleteButton}>
          <button>✗</button>
        </div>
      </div>
    )
  }

  let itemsText = props.toDoItem.map((item) => {
    return <Text text={item.text} isChecked={item.isChecked} userId={item.id}
                 onIsChecked={props.onIsChecked}/>
  })

  return (
    <div className={classes.toDoItems}>
      {itemsText}
    </div>
  );
};

export default ToDoItems;