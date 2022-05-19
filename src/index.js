// previous code before react version 18 index.js component

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import store from "./redux/store";
// import { Provider } from "react-redux";

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
// );



// react 18 version update index js component

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App /></Provider>);
