import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/Main/MainPage";
import SigninPage from "./Pages/Signin/SigninPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
