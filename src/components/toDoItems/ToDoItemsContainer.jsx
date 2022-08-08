import React from 'react';
import {connect} from "react-redux";
import ToDoItems from "./ToDoItems";
import {
  addItemsAC, deleteItemAC,
  onIsCheckedAC
} from "../../redux/inputBarReducer";
import axios from "axios";

class ToDoItemsContainer extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3002/api/items')
      .then(response => {
        this.props.addItems(response.data)
      })
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
    deleteItem: (itemId) => {
      dispatch(deleteItemAC(itemId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItemsContainer);