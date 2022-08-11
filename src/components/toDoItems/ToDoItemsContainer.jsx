import React from 'react';
import {connect} from "react-redux";
import ToDoItems from "./ToDoItems";
import {
  addDeleteItemsThunkCreator,
  addIsAddItemsThunkCreator,
  addIsCheckedThunkCreator,
  addItemsAC, addItemThunkCreator, addTextThunkCreator, deleteItemAC,
  onIsCheckedAC, setBoardAC
} from "../../redux/inputBarReducer";
import {itemsAPI} from "../../api/api";

class ToDoItemsContainer extends React.Component {
  componentDidMount() {
    this.props.addItemThunkCreator();
  }

  render() {
    return (
      <>
        <ToDoItems {...this.props}/>
      </>
    )
  }
}

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
    addItemThunkCreator: () => dispatch(addItemThunkCreator()),
    addIsCheckedThunkCreator: (itemId) => dispatch(
      addIsCheckedThunkCreator(itemId)),
    addIsAddItemsThunkCreator: (board) => dispatch(
      addIsAddItemsThunkCreator(board)),
    addDeleteItemsThunkCreator: (itemId) => dispatch(
      addDeleteItemsThunkCreator(itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItemsContainer);