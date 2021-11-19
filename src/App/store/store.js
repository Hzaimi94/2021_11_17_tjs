import { combineReducers, createStore } from "redux";
import { REST_ADR, REST_RESOURCES } from "../config/config";

export const resourcesInitialState = {
  memes: [],
  images: [],
};

export const PUBLIC_RESOURCES_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

function resourceReducer(state = resourcesInitialState, action) {
  console.log(action);
  // On remarque que ce reducer attrappe l'action qui concerne l'autre reducer
  switch (action.type) {
    case "INIT":
      console.log("Resource Reducer INIT");
      const pimages = fetch(REST_ADR + REST_RESOURCES.images, {
        method: "GET",
      }).then((f) => {
        return f.json();
      });
      const pmemes = fetch(REST_ADR + REST_RESOURCES.memes, {
        method: "GET",
      }).then((f) => {
        return f.json();
      });
      Promise.all([pimages, pmemes]).then((arr_arr) => {
        store.dispatch({ type: "INIT_ARRAYS", values: arr_arr });
      });
      //.then((arr) =>
      //  store.dispatch({
      //    type: PUBLIC_RESOURCES_ACTIONS.REPLACE_IMAGES_LIST,
      //    values: arr,
      //  })
      //);
      return state;
    case "INIT_ARRAYS":
      return { ...state, images: action.values[0], memes: action.values[1] };
    case PUBLIC_RESOURCES_ACTIONS.REPLACE_IMAGES_LIST:
      return { ...state, images: action.values };
    case PUBLIC_RESOURCES_ACTIONS.REPLACE_MEMES_LIST:
      return { ...state, memes: action.values };
    case PUBLIC_RESOURCES_ACTIONS.ADD_MEME:
      // On ne mute pas les valeurs dans un state -> pas de state.memes.push
      // On crée un nouveau tableau pour faire une nouvelle référence et pouvoir comparer
      // Le push ne change pas de référence
      return { ...state, memes: [...state.memes, action.value] };
    default:
      return state;
  }
}

// let state = resourceReducer(undefined, {
//   type: PUBLIC_RESOURCES_ACTIONS.REPLACE_IMAGES_LIST,
//   values: [{ id: 0 }, { id: 1 }],
// });

// console.log("State", state);

// state = resourceReducer(state, {
//   type: PUBLIC_RESOURCES_ACTIONS.REPLACE_MEMES_LIST,
//   values: [{ id: 10 }, { id: 11 }],
// });

// console.log("State2", state);

export const currentInitialState = {
  titre: "",
  text: "",
  x: 0,
  y: 10,
  fontSize: 10,
  fontWeight: "500",
  underline: false,
  italic: false,
  frameX: 0,
  frameY: 0,
  color: "black",
  imageId: -1,
};

export const CURRENT_PUBLIC_ACTIONS = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_MEME: "CLEAR_MEME",
  SAVE_MEME: "SAVE_MEME",
});

const currentReducer = (state = currentInitialState, action) => {
  //console.log(action.type);
  switch (action.type) {
    case "INIT":
      console.log("Current Reducer INIT");
      return state;
    case CURRENT_PUBLIC_ACTIONS.UPDATE_CURRENT:
      return { ...action.value };
    case CURRENT_PUBLIC_ACTIONS.CLEAR_MEME:
      return { ...currentInitialState };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ current: currentReducer, resource: resourceReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: PUBLIC_RESOURCES_ACTIONS.REPLACE_IMAGES_LIST,
  values: [{ id: 0 }, { id: 1 }],
});
store.dispatch({
  type: PUBLIC_RESOURCES_ACTIONS.REPLACE_MEMES_LIST,
  values: [{ id: 10 }, { id: 11 }],
});
store.dispatch({
  type: "INIT",
});

export default store;
