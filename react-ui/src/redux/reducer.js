import { CHANGE_WORD } from "./action";

const initialState = {
  word: {}
};

function wordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_WORD: {
      return {
        ...state,
        word: action.word
      };
    }
    default: {
      return state;
    }
  }
}

export default wordReducer;
