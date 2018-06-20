import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");

export const CHANGE_WORD = "CHANGE_WORD";

export const changeWord = actions => {
  return dispatch => {
    socket.on("showWord", word => {
      dispatch(actions.updateWord(word));
    });
  };
};
