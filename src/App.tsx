import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import NoPage from "./pages/NoPage";
import UrlCounter from "./pages/UrlCounter";
import GetOriginalURL from "./pages/GetOriginalURL";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/url-click-counter" element={<UrlCounter />} />
        <Route path="/get-original-url" element={<GetOriginalURL />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
