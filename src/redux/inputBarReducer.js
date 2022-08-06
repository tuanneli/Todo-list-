import React from 'react';

const ON_TEXT_CHANGE = 'ON_TEXT_CHANGE';
const ON_ADD_TEXT = 'ON_ADD_TEXT';
const IS_CHECKED = 'IS_CHECKED';

const initialState = {
  itemsData: [
    {text: 'Text 1', isChecked: false, id: 1},
    {text: 'Text 2', isChecked: false, id: 2},
    {text: 'Text 3', isChecked: false, id: 3},
  ],
  initialText: "",

};

async function request(url, method = 'GET', data = null) {
  try {
    const headers = {}
    let body

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    })
    return await response.json()
  } catch (e) {
    console.warn('Error'.e.message);
  }
}

const InputBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_TEXT_CHANGE:
      return {
        ...state,
        initialText: action.text,
      }
    case ON_ADD_TEXT:
      let randNum = Math.ceil(Math.random() * 10000);
      return {
        ...state,
        itemsData: [...state.itemsData,
          {text: state.initialText, isChecked: false, id: randNum}],
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

export default InputBarReducer;