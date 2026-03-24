import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyAdmissionBar from './components/StickyAdmissionBar';
import ExitIntentPopup from './components/ExitIntentPopup';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Academics = lazy(() => import('./pages/Academics'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const LandingPage = lazy(() => import('./pages/LandingPage'));

const AppContent = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/lp';

  return (
    <div className="min-h-screen flex flex-col">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/lp" element={<LandingPage />} />
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-8xl font-extrabold text-primary mb-4">404</h1>
                <p className="text-2xl text-gray-600 mb-8">Page Not Found</p>
                <a href="/" className="bg-accent text-primary px-8 py-3 rounded-full font-bold hover:bg-accent-dark transition-all">
                  Go Back Home
                </a>
              </div>
            } />
          </Routes>
        </Suspense>
      </main>
      {!isLandingPage && <Footer />}
      <WhatsAppButton />
      <StickyAdmissionBar />
      <ExitIntentPopup />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
