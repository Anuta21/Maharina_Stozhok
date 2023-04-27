import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, BookPage, ContactPage, AboutUsPage } from "./pages";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};
