// Pour dire que ces fonctions sont des composants
import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";

/**
 * Composant button HTML
 * @param {*} props du composant
 * @returns button render
 */
const Button = (props) => {
  const [clicked, setClicked] = useState({
    state: false,
    autreValue: "Whatever",
  });

  // Fait les 3 méthodes du cycle de vie
  useEffect(() => {
    // Fait didMount et didUpdate selon le tableau [Input]
    // [Input] ce qui sera observé
    // Si le input est monté ou subit une modif, on va exécuter effect
    // effect
    if (!clicked.state) {
      return;
    }
    console.log(clicked);
    setTimeout(() => {
      setClicked({ ...clicked, state: false });
    }, 300);
    // Retourne la fonction WillUnmount
    //return () => {
    //  cleanup
    //}
  }, [clicked]);
  console.log(props);
  return (
    <button
      className={`${style.Button}${clicked.state ? " " + style.clicked : ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style, // props.style écrasera les props précédents
      }}
      onClick={(evt) => {
        // ...clicked pour ne pas écraser l'ancien state
        setClicked({ ...clicked, state: true });
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
