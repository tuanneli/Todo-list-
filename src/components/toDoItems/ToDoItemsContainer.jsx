import React from 'react';
import {connect} from "react-redux";
import ToDoItems from "./ToDoItems";
import {
  addDeleteItemsThunkCreator,
  addIsAddItemsThunkCreator,
  addIsCheckedThunkCreator,
  addItemsAC,
  addItemThunkCreator,
  changeNoteThunkCreator,
  onIsCheckedAC,
} from "../../redux/inputBarReducer";
import Preloader from "../../common/Preloader";

class ToDoItemsContainer extends React.Component {
  componentDidMount() {
    this.props.addItemThunkCreator();
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : <ToDoItems {...this.props}/>}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    toDoItem: state.inputBar.itemsData,
    isChecked: state.inputBar.isChecked,
    isFetching: state.inputBar.isFetching,
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
    changeNoteThunkCreator: (text, itemId) => dispatch(
      changeNoteThunkCreator(text, itemId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItemsContainer);