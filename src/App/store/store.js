import { createStore } from 'redux'

const resourcesInitialState = {
  memes: [],
  images: [],
};

export const PUBLIC_RESOURCES_ACTIONS = Object.freeze({
  REPLACE_MEMES_LIST: "REPLACE_MEMES_LIST",
  REPLACE_IMAGES_LIST: "REPLACE_IMAGES_LIST",
  ADD_MEME: "ADD_MEME",
});

function resourceReducer(state = resourcesInitialState, action) {
  console.log("Action reducer", action);
  switch (action.type) {
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

const store = createStore(resourceReducer);
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
  type: PUBLIC_RESOURCES_ACTIONS.ADD_MEME,
  value: [{ id: 20 }],
});
