import React from 'react';
import './HeroSection.css';
import linktreeImg from '../Asset/Images/linktree.png';
import secondImg from '../Asset/Images/2nd pic.png'; 
import ThirdImg from '../Asset/Images/3rd.png';   
import FourthImg from '../Asset/Images/4th.png';
import FiftthImg from '../Asset/Images/pic.png';
import sixthImg from '../Asset/Images/flag.png';

const HeroSection = () => {
  return (
    <div>
      {/* First Hero Section */}
      <section className="hero green-bg">
        <div className="hero-content slide-in-left">
          <h1>Everything you are.<br/>In one, simple link in bio.</h1>
          <p>
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube, and other social media profiles.
          </p>
          <div className="hero-actions">
            <input type="text" placeholder="linktr.ee/yourname" />
            <button className="btn-claim">Claim your Linktree</button>
          </div>
        </div>
        <div className="hero-image fade-in">
          <img src={linktreeImg} alt="Profile" /> 
        </div>
      </section>

      {/* Second Hero Section */}
      <section className="hero purple-bg">
        <div className="hero-image fade-in">
          <img src={secondImg} alt="Profile" /> 
        </div>
        <div className="hero-content slide-in-right">
          <h1>Create and customize your Linktree in minutes</h1>
          <p>
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events, and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <button className="btn-get-started">Get started for free</button>
        </div>
      </section>

      {/* Third Hero Section */}
      <section className="hero red-bg">
        <div className="hero-content slide-in-left">
          <h1>Share your Linktree from your Instagram, TikTok, Twitter and other bios</h1>
          <p>
            Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
          </p>
          <button className="btn-get-started">Get started for free</button>
        </div>
        <div className="hero-image fade-in">
          <img src={ThirdImg} alt="Profile" /> 
        </div>
      </section>

      {/* Fourth Hero Section */}
      <section className="hero purple-bg">
        <div className="hero-image fade-in">
          <img src={FourthImg} alt="Profile" /> 
        </div>
        <div className="hero-content slide-in-right">
          <h1>Analyze your audience and keep your followers engaged</h1>
          <p>
            Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
          </p>
          <button className="btn-get-started">Get started for free</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className='bg-white'>
        <div className="featured-container fade-in">  
          <h2>As featured in...</h2>  
          <div className="logos-container">  
            <span className="logo">TC</span>  
            <span className="logo">INSIDER</span>  
            <span className="logo">Mashable</span>  
            <span className="logo">FORTUNE</span>  
            <span className="logo highlighted">Forbes</span>  
          </div> 
          <div className='profile'>
            <img className='a' src={FiftthImg} alt="Profile" /> 
            <h1>"Linktree simplifies the process for creators to share multiple parts of themselves in one inclusive link"</h1>
          </div> 
        </div> 
      </section>

      {/* FAQ Section */}
      <section className='got-Q'>
        <div className="faq-container slide-in-left">  
          <h1>Got questions?</h1>  
          <div className="faq-item">  
            <h2>Why do I need a link in bio tool?</h2>  
            <p>  
              Right now, every time you've got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It's time-consuming and complicated—making it so much harder to keep everything up to date.  
            </p>  
            <p>  
              A link in bio tool means you never have to compromise, or remove one link from your bio to add another. You can keep everything you want to share online in one link. When you've got a change, you can only ever have to make it once.  
            </p>  
          </div>  
          <div className="faq-item">  
            <h2>Is Linktree the original link in bio tool?</h2>  
            <p>  
              Yes, Linktree is the original link in bio tool, designed to help you share multiple links through a single URL. It allows you to connect your audience to all your content seamlessly.  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Footer Section */}
      <section className='foot'>
        <div className="jumpstart-container fade-in">  
          <h1>Jumpstart your corner of the internet today</h1>  
          <div className="input-container">  
            <input type="text" placeholder="linktr.ee/yourname" className="username-input" />  
            <button className="claim-button">Claim your Linktree</button>  
          </div>  
        </div>  
        <footer className="footer">  
          <div className="footer-container">  
            <div className="footer-section">  
              <h4>Company</h4>  
              <ul>  
                <li>Linktree Blog</li>  
                <li>Engineering Blog</li>  
                <li>What's New</li>  
                <li>Press</li>  
                <li>Careers</li>  
                <li>Link in Bio</li>  
                <li>Social Good</li>  
                <li>Contact</li>  
              </ul>  
            </div>  
            <div className="footer-section">  
              <h4>Community</h4>  
              <ul>  
                <li>Linktree for Enterprise</li>  
                <li>2023 Creator Report</li>  
                <li>Charities</li>  
                <li>Linktree Profile Directory</li>  
                <li>Creator Profile Templates</li>  
              </ul>  
            </div>  
            <div className="footer-section">  
              <h4>Support</h4>  
              <ul>  
                <li>Help Topics</li>  
                <li>Getting Started</li>  
                <li>Linktree Pro</li>  
                <li>Features & How-Tos</li>  
                <li>FAQs</li>  
                <li>Report a Violation</li>  
              </ul>  
            </div>  
            <div className="footer-section">  
              <h4>Trust & Legal</h4>  
              <ul>  
                <li>Privacy Notice</li>  
                <li>Cookie Policy</li>  
                <li>Terms</li>  
                <li>Cookie Preferences</li>  
              </ul>  
            </div>  
          </div>  
          <div className="footer-buttons">  
            <button className="footer-button">Log in</button>  
            <button className="footer-button">Get started for free</button>  
          </div>  
        </footer>  

        <div className="linktree-container slide-in-up">  
          <h1>Linktree*</h1>  
        </div> 
        <div className="flags-container fade-in">  
          <img src={sixthImg} alt="flag" /> 
          <p>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville St, Collingwood VIC 3066</p>
        </div> 
        <div className="footer2">
      <p>&copy; 2024 Avinash Kumar. All rights reserved.</p>
    </div>

      </section>
    </div>
  );
}

export default HeroSection;
