import React from 'react';
import classes from "./ToDoItems.module.css";
import axios from "axios";
// Access-Control-Allow-Origin: http://foo.example

const ToDoItems = (props) => {

  // async function request(url, method = 'GET', data = null) {
  //   try {
  //     const headers = {}
  //     let body
  //
  //     if (data) {
  //       headers['Content-Type'] = 'application/json'
  //       body = JSON.stringify(data);
  //     }
  //
  //     const response = await fetch(url, {
  //       method,
  //       headers,
  //       body,
  //     })
  //     return await response.json()
  //   } catch (e) {
  //     console.warn('My Error', e.message);
  //   }
  // }

  if (props.toDoItem.length === 0) {
    axios.get('http://localhost:3002/api/items')
      .then(response => {
        props.addItems(response.data)
      })
  }

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