import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import App from "./components/App";
import { store, persistor } from "./store";

render(
  <Provider store={store}>
 
    <BrowserRouter>
      
         <App />
    
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
