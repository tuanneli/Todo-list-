// import React from 'react';
import axios from "axios";

const ON_TEXT_CHANGE = 'ON_TEXT_CHANGE';
const ON_ADD_TEXT = 'ON_ADD_TEXT';
const IS_CHECKED = 'IS_CHECKED';
const ADD_ITEMS = 'ADD_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';

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
      if (state.initialText !== "") {
        let randNum = Math.ceil(Math.random() * 10000);
        axios.post('http://localhost:3002/api/items', {
          text: state.initialText, isChecked: false, id: randNum
        })
          .then(response => {
            return response.data;
          })
        return {
          ...state,
          itemsData: [...state.itemsData,
            {text: state.initialText, isChecked: false, id: randNum}],
          initialText: "",
        }
      }
      return state;
    case IS_CHECKED:
      axios.post('http://localhost:3002/api/items', {
        itemId: action.itemId
      })
        .then(response => {
          return response.data;
        })
      return {
        ...state,
        itemsData: state.itemsData.map((item) => {
          if (item.id === action.itemId) {
            return {...item, isChecked: !item.isChecked}
          }
          return item;
        })
      }
    case ADD_ITEMS:
      return {
        ...state,
        itemsData: action.itemsData,
      }
    case DELETE_ITEM:
      axios.post(`http://localhost:3002/api/items`, {
        params: action.itemId
      })
        .then(response => {
          return response.data;
        })
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

export const onAddTextAC = () => {
  return {
    type: ON_ADD_TEXT,
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

export default InputBarReducer;