import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import styles from "./MemeForm.module.scss";

const initialState = {};
function MemeForm(props) {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    // didMount + didUpdate
    //return () => {
    // willUnmount
    //};
  }, [state]);
  return (
    <div data-testid="MemeForm" className={styles.MemeForm}>
      <form>
        <h1>Titre</h1>
        <input
          type="text"
          id="f_titre"
          placeholder="Saisir le titre"
          value={props.meme.titre}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        ></input>
        <hr />
        <h2>Image</h2>
        <select
          value={props.meme.imageId}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1">Aucune</option>
          {props.images.map((e, i) => (
            <option value={e.id}>{e.titre}</option>
          ))}
        </select>
        <hr />
        <h2>Texte</h2>
        <input
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
        ></input>
        <br />

        <div className={styles.half}>
          <div>
            <label id="f_x" htmlFor="f_x">
              X:
            </label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.x}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label id="f_y" htmlFor="f_y">
              Y:
            </label>
            <br />
            <input
              type="number"
              className={styles.smallInput}
              value={props.meme.y}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  y: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />

        <label htmlFor="f_color">Couleur</label>
        <input
          type="color"
          id="f_color"
          value={props.meme.color}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              color: evt.target.value,
            });
          }}
        ></input>

        <div className={styles.half}>
          <div>
            <label htmlFor="f_underline">Underline:</label>
            <br />
            <input
              id="f_underline"
              type="checkbox"
              checked={props.meme.underline}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  underline: evt.target.checked,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="f_italic">Italic:</label>
            <br />
            <input
              id="f_italic"
              type="checkbox"
              checked={props.meme.italic}
              onChange={(evt) => {
                props.onMemeChange({
                  ...props.meme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <hr />

        <div className={styles.half}>
          <Button type="reset" bgColor="tomato" text="Clear" />
          <Button type="submit" bgColor="green" text="Save" />
        </div>
      </form>
    </div>
  );
}

MemeForm.propTypes = {
  meme: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  onMemeChange: PropTypes.func.isRequired,
};

MemeForm.defaultProps = {};

export default MemeForm;
