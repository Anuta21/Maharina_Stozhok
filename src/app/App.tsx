import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, BookPage, CatalogPage } from "./pages";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </Router>
  );
};
