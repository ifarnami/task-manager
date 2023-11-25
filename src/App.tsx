import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./pages/test";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer rtl={true} autoClose={3000} newestOnTop={true} />
    </>
  );
};

export default App;
