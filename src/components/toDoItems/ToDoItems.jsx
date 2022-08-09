import React, {useEffect, useRef, useState} from 'react';
import classes from "./ToDoItems.module.css";
import axios from "axios";

const ToDoItems = (props) => {

  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    props.setBoard(props.toDoItem)
  }, [props.toDoItem])

  function dragOverHandler(e, item) {
    e.preventDefault()
    if (e.target.className === classes.textItem || e.target.className ===
      classes.isChecked) {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, item) {
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, item) {
    e.target.style.boxShadow = 'none'
    e.preventDefault()
    const currentIndex = props.toDoItem.indexOf(currentItem);
    props.toDoItem.splice(currentIndex, 1);
    const dropIndex = props.toDoItem.indexOf(item);
    props.toDoItem.splice(dropIndex + 1, 0, currentItem);
    props.setBoard(props.toDoItem);
  }

  const Text = (props) => {
    return (
      <div
        className={classes.toDoItem}
        onDragOver={(e) => dragOverHandler(e, props.item)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragStart={(e) => dragStartHandler(e, props.item)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e, props.item)}
      >
        <div
          draggable={true}
          className={props.isChecked ? classes.isChecked : classes.textItem}>
          {props.text}
        </div>
        <div className={classes.checkButton}>
          <button onClick={() => {props.onIsChecked(props.userId)}}>✓
          </button>
        </div>
        <div className={classes.deleteButton}>
          <button onClick={() => {props.deleteItem(props.userId)}}>✗</button>
        </div>
      </div>
    )
  }

  let itemsText = props.toDoItem.map((item) => {
    return <Text text={item.text}
                 isChecked={item.isChecked}
                 userId={item.id}
                 onIsChecked={props.onIsChecked}
                 deleteItem={props.deleteItem}
                 item={item}
    />
  })

  return (
    <div>
      {props.toDoItem.length ? itemsText :
        <h1 className={classes.noItemsYet}>{""}</h1>}
    </div>
  );
};

export default ToDoItems;