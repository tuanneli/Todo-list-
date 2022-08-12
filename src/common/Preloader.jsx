import React from 'react';
import Img from "../images/loader.svg";
import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={classes.PreloaderBox}>
      <img className={classes.preloader} src={Img} alt="nothing"/>
    </div>
  );
};

export default Preloader;