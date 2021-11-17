// Pour dire que ces fonctions sont des composants
import React from "react";
import "./Button.css";

/**
 * Composant button HTML
 * @param {*} props du composant
 * @returns button render
 */
const Button = (props) => {
  console.log(props);
  return (
    <button className="Button" onClick={(evt) => props.onButtonClicked()}>
      {props.text}
    </button>
  );
};

export default Button;
