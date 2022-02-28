import { combineReducers } from "redux";
import cartreducer from "./cardReducer";

let reducers = combineReducers({
  cartreducer: cartreducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
