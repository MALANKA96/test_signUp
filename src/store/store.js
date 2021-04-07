import { combineReducers, createStore } from "redux";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
  form: formReducer,
});

export const store = createStore(reducers);
