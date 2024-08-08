
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
// import LoginPage from './Loginpage';
// import Signup from './signup';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      {/* <Signup/>
<LoginPage/> */}
      <HeroSection />
      
    </div>
  );
}

export default LandingPage;
