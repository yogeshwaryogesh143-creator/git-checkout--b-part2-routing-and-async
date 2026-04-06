import { Routes, Route } from "react-router-dom";
import NavBar from "./src/Components/NavBar.jsx";
import HomePage from "./src/Components/pages/HomePage.jsx";
import DetailPage from "./src/Components/pages/DetailPage.jsx";
import SavedPage from "./src/Components/pages/SavedPage.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:barcode" element={<DetailPage />} />
        <Route
          path="/saved"
          element={<SavedPage saved={[]} dispatch={() => {}} />}
        />
      </Routes>
    </div>
  );
}

export default App;
