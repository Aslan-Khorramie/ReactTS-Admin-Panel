import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

// import components
import ThemeWrapper from "./components/ThemeWrapper";
import { store } from "./redux/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import "./locale/config";
import i18n from "./locale/config";
import "./index.css";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback="loading">
          <ThemeWrapper>
            {/* <React.StrictMode>
              <App />
            </React.StrictMode> */}
            <App />
          </ThemeWrapper>
        </Suspense>
      </I18nextProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
