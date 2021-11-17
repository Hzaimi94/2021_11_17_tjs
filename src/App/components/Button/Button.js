// Pour dire que ces fonctions sont des composants
import React, { useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

/**
 * Composant button HTML
 * @param {*} props du composant
 * @returns button render
 */
const Button = (props) => {
  const [clicked, setClicked] = useState({ state: false, autreValue: "Vamos" });
  console.log(props);
  return (
    <button
      className={`${style.Button}${clicked.state ? " " + style.clicked : ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style, // props.style ecrasera les props précédents
      }}
      onClick={(evt) => {
        props.onButtonClicked();
      }}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
};

// When parent props are not provided
Button.defaultProps = {
  bgColor: "green",
  color: "white",
};

export default Button;
