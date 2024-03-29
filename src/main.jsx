// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import SignUp from "./pages/SignUp.jsx";
// import "./index.css";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Home from "./pages/Home.jsx";
// import Protected from "./components/Protected.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<Protected />}>
//         <Route path="/" index element={<Home />} />
//       </Route>
//       <Route path="signup" element={<SignUp />} />
//     </Route>
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={router} />);

// chatgpt code
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SignUp from "./pages/SignUp.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Protected from "./components/Protected.jsx";
import { HashRouter } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Protected />}>
        <Route path="/" index element={<Home />} />
      </Route>
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={router}>
    <HashRouter>
      <App />
    </HashRouter>
  </RouterProvider>
);
