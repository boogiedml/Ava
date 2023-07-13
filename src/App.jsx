import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Main } from "./pages";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
