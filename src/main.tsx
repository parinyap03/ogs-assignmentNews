// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";
// import store from "./store/store.tsx";
// import { Provider } from "react-redux";
// import { ConfigProvider, Modal } from "antd";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     {/* <Provider store={store}> */}
//     {/* <BrowserRouter> */}
//     <ConfigProvider
//       theme={{
//         components: {
//           Modal: {
//             contentBg: "background-color: #000 !important",
//             colorText: "white",
//             headerBg: "background-color: #f0f0f0",
//             titleColor: "white",
//             titleFontSize: 20,
//           },
//         },
//       }}
//     >
//       <App />
//     </ConfigProvider>

//     {/* </BrowserRouter> */}
//     {/* </Provider> */}
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "@store/store";
import { ConfigProvider, Pagination } from "antd";
import { current } from "@reduxjs/toolkit";

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement as HTMLElement);

// root.render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
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
          // token: {
          //   // colorText: "white",
          //   colorPrimaryActive: "red",
          // },
        }}
        
      >
        <App />
      </ConfigProvider>
      {/* // <App /> */}
      {/* <Pagination defaultCurrent={1} total={50} /> */}
    </Provider>
  </React.StrictMode>
);

// );
