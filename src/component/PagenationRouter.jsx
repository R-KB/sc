import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenreList from "./GenreList";
import DetailPage from "./DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GenreList />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
