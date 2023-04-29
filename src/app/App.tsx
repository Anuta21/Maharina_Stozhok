import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  LandingPage,
  BookPage,
  CatalogPage,
  ContactPage,
  AboutUsPage,
  DeliveryCardPage,
  PaymentPage,
  LoginPage,
  SighUpPage,
  NotFoundPage,
  ThanksPage,
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
        <Route path="payment" element={<PaymentPage />} />
        <Route path="/thanks" element={<ThanksPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/sigh-up" element={<SighUpPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
