import * as actionTypes from "./action";
const initialState = {
  user: null,
  userPhoto: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN: {
      let myState = initialState;
      myState.user = action.name;
      myState.userPhoto = action.photo;
      return myState;
    }
    default:
      return state;
  }
};
export default reducer;
