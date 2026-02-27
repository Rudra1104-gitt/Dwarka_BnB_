import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { HomePage } from './pages/HomePage';
import { StaysPage } from './pages/StaysPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { HostPage } from './pages/HostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PaymentSuccessPage } from './pages/PaymentSuccessPage';
import { DwarkaGuidePage } from './pages/DwarkaGuidePage';
import { BlogPage } from './pages/BlogPage';
import { WishlistPage } from './pages/WishlistPage';
import { MyTripsPage } from './pages/MyTripsPage';
import { HostDashboardPage } from './pages/HostDashboardPage';
import { ListPropertyPage } from './pages/ListPropertyPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { MessagesPage } from './pages/MessagesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/host" element={<HostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/guide" element={<DwarkaGuidePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout/:id" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccessPage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/my-trips" element={<MyTripsPage />} />
            <Route path="/host/dashboard" element={<HostDashboardPage />} />
            <Route path="/host/list" element={<ListPropertyPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/messages" element={<MessagesPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating Support Button */}
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#c19b6c] text-white rounded-full shadow-2xl flex items-center justify-center hover:brightness-110 transition-all group"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Need help? Chat with us
          </span>
        </motion.button>
      </div>
    </Router>
  );
}
