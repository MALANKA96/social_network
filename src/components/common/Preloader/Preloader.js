import * as React from "react";
import preloader from "../../../assets/image/preloader.svg";
import style from "./Preloader.module.css";

let Preloader = () => {
  return (
    <div className={style.preloader} >
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
