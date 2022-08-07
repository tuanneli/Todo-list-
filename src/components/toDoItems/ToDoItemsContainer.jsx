import React from 'react';
import {connect} from "react-redux";
import ToDoItems from "./ToDoItems";
import {
  addItemsAC, deleteItemAC,
  onAddTextAC,
  onIsCheckedAC
} from "../../redux/inputBarReducer";

const mapStateToProps = (state) => {
  return {
    toDoItem: state.inputBar.itemsData,
    isChecked: state.inputBar.isChecked
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIsChecked: (itemId) => {
      dispatch(onIsCheckedAC(itemId))
    },
    addItems: (itemsData) => {
      dispatch(addItemsAC(itemsData))
    },
    deleteItem: (itemId) => {
      dispatch(deleteItemAC(itemId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItems);