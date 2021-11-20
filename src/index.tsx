import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

// import components
import ThemeWrapper from "./components/ThemeWrapper";
import { store } from "./redux/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeWrapper>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ThemeWrapper>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
