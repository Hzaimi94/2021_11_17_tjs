// Pour dire que ces fonctions sont des composants
import React from "react";
import './Button.css'

/**
 * Composant button HTML
 * @param {*} props du composant
 * @returns button render
 */
const Button = (props) => {
  return <button className="Button">Submit button</button>;
};

export default Button;
