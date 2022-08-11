// import React from 'react';
import axios from "axios";
import {itemsAPI} from "../api/api";

const ON_TEXT_CHANGE = 'ON_TEXT_CHANGE';
const ON_ADD_TEXT = 'ON_ADD_TEXT';
const IS_CHECKED = 'IS_CHECKED';
const ADD_ITEMS = 'ADD_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_BOARD = 'SET_BOARD';

const initialState = {
  itemsData: [],
  initialText: "",
}

const InputBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_TEXT_CHANGE:
      return {
        ...state,
        initialText: action.text,
      }
    case ON_ADD_TEXT:
      return {
        ...state,
        itemsData: [...state.itemsData,
          {text: action.Text, isChecked: false, id: action.itemId}],
        initialText: "",
      }
    case IS_CHECKED:
      return {
        ...state,
        itemsData: state.itemsData.map((item) => {
          if (item.id === action.itemId) {
            return {...item, isChecked: !item.isChecked}
          }
          return item;
        })
      }
    case SET_BOARD:
      return {
        ...state,
        itemsData: action.board,
      }
    case ADD_ITEMS:
      return {
        ...state,
        itemsData: action.itemsData,
      }
    case DELETE_ITEM:
      return {
        ...state,
        itemsData: state.itemsData.filter(item => item.id !== action.itemId),
      }
    default:
      return state;
  }
};

export const onTextChangeAC = (text) => {
  return {
    type: ON_TEXT_CHANGE, text
  }
};

export const onAddTextAC = (Text, itemId) => {
  return {
    type: ON_ADD_TEXT,
    Text,
    itemId
  }
};

export const onIsCheckedAC = (itemId) => {
  return {
    type: IS_CHECKED,
    itemId
  }
};

export const deleteItemAC = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId
  }
};

export const addItemsAC = (itemsData) => {
  return {
    type: ADD_ITEMS,
    itemsData
  }
};

export const setBoardAC = (board) => {
  return {
    type: SET_BOARD,
    board
  }
};

export const addItemThunkCreator = () => {
  return (dispatch) => {
    itemsAPI.getItems().then(response => {
      dispatch(addItemsAC(response.data));
    });
  }
}

export const addTextThunkCreator = (Text) => {
  return (dispatch) => {
    if (Text !== "") {
      let randNum = Math.ceil(Math.random() * 10000);
      itemsAPI.postText(Text, randNum)
        .then(response => {
          return response.data;
        })
      dispatch(onAddTextAC(Text, randNum))
    }
  }
}

export const addIsCheckedThunkCreator = (itemId) => {
  return (dispatch) => {
    itemsAPI.postIsChecked(itemId)
      .then(response => {
        return response.data;
      })
    dispatch(onIsCheckedAC(itemId))
  }
}

export const addIsAddItemsThunkCreator = (board) => {
  return (dispatch) => {
    itemsAPI.setBoard(board)
      .then(response => {
        return response.data;
      })
    dispatch(setBoardAC(board))
  }
}

export const addDeleteItemsThunkCreator = (itemId) => {
  return (dispatch) => {
    itemsAPI.deleteItem(itemId)
      .then(response => {
        return response.data;
      })
    dispatch(deleteItemAC(itemId))
  }
}

export default InputBarReducer;