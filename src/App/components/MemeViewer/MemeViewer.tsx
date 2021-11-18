import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.scss";
import { I_Image, I_Meme } from "../../interfaces/interfaces";

interface I_Props {
  meme: I_Meme;
  image?: I_Image;
}

const MemeViewer = (props: I_Props) => (
  // data-testid pour le test
  <svg
    className={styles.MemeViewer}
    data-testid="MemeViewer"
    viewBox={`0 0 ${props.image.w} ${props.image.h}`}
  >
    {/** L'image puis le texte */}
    <image href={props.image.url} x="0" y="0"></image>
    <text
      x={props.meme.x}
      y={props.meme.y}
      fill={props.meme.color}
      fontSize={props.meme.fontSize}
      textDecoration={props.meme.underline ? "underline" : "none"}
      fontStyle={props.meme.italic ? "italic" : "normal"}
      fontWeight={props.meme.fontWeight}
    >
      {props.meme.text}
    </text>
  </svg>
);

// Perd son sens avec les interfaces 
//MemeViewer.propTypes = {
//  meme: PropTypes.object.isRequired,
//  image: PropTypes.object,
//};

MemeViewer.defaultProps = {};

export default MemeViewer;
