import React, {useEffect, useState} from 'react';
import classes from "./ToDoItems.module.css";
import Note from "./Note";

const ToDoItems = (props) => {

  const [currentItem, setCurrentItem] = useState(null)

  useEffect(() => {
    props.addIsAddItemsThunkCreator(props.toDoItem)
  }, [props.toDoItem])

  function dragOverHandler(e) {
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
    props.addIsAddItemsThunkCreator(props.toDoItem.map((item) => {
      return item;
    }))
  }

  const Text = (props) => {
    return (
      <div
        className={classes.toDoItem}
        onDragOver={(e) => dragOverHandler(e)}
        onDragLeave={e => dragLeaveHandler(e)}
        onDragStart={(e) => dragStartHandler(e, props.item)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDrop={(e) => dropHandler(e, props.item)}
      >
        <Note {...props}/>
        <div className={classes.checkButton}>
          <button
            onClick={() => {props.addIsCheckedThunkCreator(props.userId)}}>✓
          </button>
        </div>
        <div className={classes.deleteButton}>
          <button
            onClick={() => {props.addDeleteItemsThunkCreator(props.userId)}}>✗
          </button>
        </div>
      </div>
    )
  }

  let itemsText = props.toDoItem.map((item) => {
    return <Text {...props}
                 text={item.text}
                 isChecked={item.isChecked}
                 userId={item.id}
                 onIsChecked={props.onIsChecked}
                 addDeleteItemsThunkCreator={props.addDeleteItemsThunkCreator}
                 addIsCheckedThunkCreator={props.addIsCheckedThunkCreator}
                 item={item}
    />
  })
  return (
    <div>
      {props.toDoItem.length ? itemsText :
        <h1 className={classes.noItemsYet}>{"No notes yet"}</h1>}
    </div>
  );
};

export default ToDoItems;