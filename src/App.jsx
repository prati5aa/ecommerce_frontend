
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { store } from "./redux/Store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer/>
    </Provider>
  );
}

export default App;