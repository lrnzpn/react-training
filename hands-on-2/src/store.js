export const initialState = {
  jokes: []
};

export const ACTIONS = {
  ADD_JOKE: "ADD_JOKE",
  REMOVE_JOKE:" REMOVE_JOKE",
}

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTIONS.ADD_JOKE:
      return {
        ...state,
        jokes: [...state.jokes, action.payload]
      }
    case ACTIONS.REMOVE_JOKE:
      return {
        ...state,
        jokes: [...state.jokes.filter((joke) => joke.id !== action.payload)]
      }
    default:
      return state;
  }
}