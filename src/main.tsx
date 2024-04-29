import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { ConfigProvider, Modal } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <BrowserRouter> */}
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "background-color: #000 !important",
            colorText: "white",
            headerBg: "background-color: #f0f0f0",
            titleColor: "white",
            titleFontSize: 20,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>

    {/* </BrowserRouter> */}
    {/* </Provider> */}
  </React.StrictMode>
);
