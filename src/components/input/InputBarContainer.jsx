import React from 'react';
import {connect} from "react-redux";
import InputBar from "./InputBar";
import {
  addTextThunkCreator,
  onAddTextAC,
  onTextChangeAC
} from "../../redux/inputBarReducer";

const mapStateToProps = (state) => {
  return {
    initialText: state.inputBar.initialText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTextChange: (text) => {
      dispatch(onTextChangeAC(text))
    },
    onAddText: () => {
      dispatch(onAddTextAC())
    },
    addTextThunkCreator: (Text) => dispatch(addTextThunkCreator(Text)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBar);