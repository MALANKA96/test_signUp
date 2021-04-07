import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { store } from "./store/store";

const rerender = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

rerender();

store.subscribe(() => {
  rerender();
});