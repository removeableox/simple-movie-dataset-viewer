import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Movie from "./pages/Movie.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
