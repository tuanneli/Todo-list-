import React from 'react';
import axios from "axios";

const baseURL = 'http://localhost:3002/api/items';

export const itemsAPI = {
  getItems() {
    return axios.get(baseURL)
  },
  postText(Text, itemId) {
    return axios.post(baseURL, {
      text: Text, isChecked: false, id: itemId
    })
  },
  postIsChecked(itemId) {
    return axios.post(baseURL, {
      itemId
    })
  },
  setBoard(board) {
    return axios.post(baseURL, {
      board
    })
  },
  deleteItem(itemId) {
    return axios.post(baseURL, {
      params: itemId
    })
  },
  changeNote(text, itemId) {
    return axios.post(baseURL, {
      text,
      itemId
    })
  }
};

