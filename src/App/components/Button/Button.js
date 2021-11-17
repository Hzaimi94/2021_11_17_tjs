// Pour dire que ces fonctions sont des composants
import React from "react";
import "./Button.css";
import PropTypes from 'prop-types';

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

Button.propTypes={
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
}
export default Button;
