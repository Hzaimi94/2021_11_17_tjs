// Pour dire que ces fonctions sont des composants
import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

/**
 * Composant button HTML
 * @param {*} props du composant
 * @returns button render
 */
const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      style={{ backgroundColor: props.bgColor, color: props.color }}
      onClick={(evt) => props.onButtonClicked()}
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
};

// When parent props are not provided
Button.defaultProps={
  bgColor: 'green',
  color: 'white',
}

export default Button;
