import { BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
import "../styles/App.css";
import { getRoutes } from "../layout/routes/index";
import LazyLoader from "../components/lazyLoader";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-quill/dist/quill.snow.css";

function App() {
  const userRole =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;
  const routeType = userRole !== null ? 1 : 0;
  const router = useRoutes(getRoutes(routeType));

  return (
    <>
      <Provider store={store}>
        <head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css"
          />
          ;
        </head>
        <script
          src="https://unpkg.com/react@16/umd/react.development.js"
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
          crossorigin
        ></script>
        <script src="https://unpkg.com/react-quill@1.3.3/dist/react-quill.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script type="text/babel" src="/my-scripts.js"></script>
        <ToastContainer />
        {/* <ActivityController> */}
        <LazyLoader>{router}</LazyLoader>

        {/* </ActivityController> */}
      </Provider>
    </>
  );
}

export default App;
