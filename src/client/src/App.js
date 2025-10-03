import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import NewPost from './pages/NewPost';
import PostForm from './components/PostForm';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SignOutButton from './components/SignOutButton';
import Enroll2FA from './components/Enroll2FA';
import LoginWithPhone from './pages/LoginWithPhone';
import PricingPage from './pages/PricingPage';
import PricingPlans from './pages/PricingPlans';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import SignOutPage from './pages/SignOutPage';
import LoginEnsure from './pages/LoginEnsure'

// Component wrapper to conditionally show Header
const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!hideHeader && <Header />}
      {!hideHeader && (
        <img
          src="https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg"
          alt="Banner"
          style={{ width: '100%' }}
        />
      )}
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeaturedArticles />
                <FeaturedTutorials />
                <NewsletterSignup />
                <SignOutButton />
              </>
            }
          />
          <Route path="/post" element={<NewPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<SignOutButton />} />
          <Route path="/Enroll2FA" element={<Enroll2FA />} />
          <Route path="/LoginWithPhone" element={<LoginWithPhone />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/Premium" element={<PricingPlans />} />
          <Route path="/signoutpage" element={<SignOutPage />} />
          <Route path="/LoginEnsure" element={<LoginEnsure />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
