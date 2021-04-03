import * as React from "react";
import SignUp from "./component/SignUp";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <SignUp />
    </Provider>
  );
};

export default App;
