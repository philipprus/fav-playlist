import React from "react";
import { Routes } from "./routes/Routes";
import { Provider } from "react-redux";
import initStore from "./redux/store";

function App() {
  return  (
    <Provider store={initStore()}>
      <Routes />
    </Provider>
    );
}

export default App;
