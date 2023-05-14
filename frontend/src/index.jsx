import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
// import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { store } from "store/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
     {/* <Auth0Provider
    domain="replicacia.us.auth0.com"
    clientId="XmrH1j1sntu30WIm3IwCRl3OTAIF8O7m"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    > */}
    <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </Provider>
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
