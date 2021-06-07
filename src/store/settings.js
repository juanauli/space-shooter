//ACTION CONSTANTS
const SET_DIFFICULTY = "SET_DIFFICULTY";
const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR";

//ACTION CREATORS
export const setDifficulty = (difficulty) => {
  return {
    type: SET_DIFFICULTY,
    difficulty
  }
}

export const setBackgroundColor = (backgroundColor) => {
  return {
    type: SET_BACKGROUND_COLOR,
    backgroundColor
  }
}

//INITIAL STATE
const initState = {
  difficulty: 'standard',
  backgroundColor: 'dark'
}


//SETTINGS REDUCER
export default function recordsReducer (state = initState, action) {
  switch (action.type) {
    case SET_DIFFICULTY:
      return Object.assign({}, state, {difficulty: action.difficulty})
    case SET_BACKGROUND_COLOR:
      return Object.assign({}, state, {backgroundColor: action.backgroundColor})
    default:
      return state;
  }
}
