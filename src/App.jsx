import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import Header from "./common/Header";
import Footer from "./common/Footer";
import GenreList from "./component/GenreList";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<GenreList />} />
          {/* <Route path="/detail/:id" element={<DetailPage />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
