import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  BookPage,
  CatalogPage,
  ContactPage,
  AboutUsPage,
  DeliveryCardPage,
  LoginPage,
  SighUpPage,
} from "./pages";

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="delivery" element={<DeliveryCardPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sigh-up" element={<SighUpPage />} />
      </Routes>
    </Router>
  );
};
