import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ChatComponent from '../src/component/DummyComponent';

import LoginPage from "./component/templates/LoginPage";
import LoginAuthenticate from "./component/templates/LoginAuthenticate";
import ChatPage from "./component/templates/ChatPage";

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<LoginAuthenticate />}>
            <Route path="chat" element={<ChatPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
