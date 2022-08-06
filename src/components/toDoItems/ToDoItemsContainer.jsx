import React from 'react';
import {connect} from "react-redux";
import ToDoItems from "./ToDoItems";
import {onIsCheckedAC} from "../../redux/inputBarReducer";

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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItems);