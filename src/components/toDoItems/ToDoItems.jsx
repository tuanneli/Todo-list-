import React from 'react';
import classes from "./ToDoItems.module.css";
import axios from "axios";
// Access-Control-Allow-Origin: http://foo.example

const ToDoItems = (props) => {

  const Text = (props) => {
    return (
      <div className={classes.toDoItem} draggable={true}>
        <div
          className={props.isChecked ? classes.isChecked : classes.textItem}>
          {props.text}
        </div>
        <div className={classes.checkButton}>
          <button onClick={() => {props.onIsChecked(props.userId)}}>✓</button>
        </div>
        <div className={classes.deleteButton}>
          <button onClick={() => {props.deleteItem(props.userId)}}>✗</button>
        </div>
      </div>
    )
  }

  let itemsText = props.toDoItem.map((item) => {
    return <Text text={item.text} isChecked={item.isChecked} userId={item.id}
                 onIsChecked={props.onIsChecked} deleteItem={props.deleteItem}/>
  })

  return (
    <div className={classes.toDoItems}>
      {props.toDoItem.length ? itemsText :
        <h1 style={{textAlign: "center"}}>No items yet</h1>}
      {/*{itemsText}*/}
    </div>
  );
};

export default ToDoItems;