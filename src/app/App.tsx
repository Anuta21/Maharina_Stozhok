import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, BookPage } from "./pages";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </Router>
  );
};
