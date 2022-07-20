import "./App.scss";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuPage from "./containers/pages/MenuPage/MenuPage";
import RandomPage from "./containers/pages/RandomPage/RandomPage";
import OrederedPage from "./containers/pages/OrderedPage/OrederedPage";
import ResultPage from "./containers/pages/ResultPage/ResultPage";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuPage />}></Route>
          <Route path="/random" element={<RandomPage />}></Route>
          <Route path="/ordered" element={<OrederedPage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
