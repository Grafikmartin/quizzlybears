

import React, { useEffect, useRef } from 'react';
import './design-system.css';
import './App.css';

function App() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Feature wird sichtbar mit Verzögerung basierend auf der Position
            const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
            if (featureItems) {
              const index = Array.from(featureItems).indexOf(entry.target as Element);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 150); // 150ms Verzögerung zwischen jedem Feature
            }
          } else {
            // Feature wird unsichtbar
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: '0px 0px -20% 0px' // Trigger 20% from bottom
      }
    );

    // Jedes Feature-Item einzeln beobachten
    const featureItems = featuresRef.current?.querySelectorAll('.feature-item');
    if (featureItems) {
      featureItems.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/assets/images/Logo-Bear-green-black.webp" alt="Quizzly Bears Logo" className="logo-bear" />
            <img src="/assets/images/Logo-Text.webp" alt="Quizzly Bears Text" className="logo-text" />
          </div>
          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#download">Download</a>
          </nav>
        </div>
      </header>
      <div className="header-line"></div>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">
                Quizzly&nbsp;Bears&nbsp;–<br />
                the quiz app with AI
              </h1>
              <button className="hero-button">Download</button>
            </div>
            <div className="hero-right">
              <img 
                src="/assets/images/play-start-solo.webp" 
                alt="Play Start Solo" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="features-section" ref={featuresRef}>
          <div className="features-content">
            <h2 className="features-title">Features Quizzly Bears</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">search</span>
                </div>
                <p className="feature-text">Find any topic for a quiz</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">tune</span>
                </div>
                <p className="feature-text">Customize the difficulty to your liking</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">edit</span>
                </div>
                <p className="feature-text">Create your own quiz</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">favorite</span>
                </div>
                <p className="feature-text">Pick your favorite topics</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">emoji_events</span>
                </div>
                <p className="feature-text">Win and get medals</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-icons">share</span>
                </div>
                <p className="feature-text">Make friends and play together</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits1 Section */}
        <div className="benefits1-section" id="benefits">
          <div className="benefits1-content">
            <h2 className="benefits1-title">Benefits Quizzly Bears</h2>
            
            <div className="benefits1-layout">
              <div className="benefits1-left">
                <div className="benefits1-image-container">
                  <img 
                    src="/assets/images/Play-Duell-Question-Block-Aktiv-F.webp" 
                    alt="Play Duell Question Block" 
                    className="benefits1-image benefits1-image-duell"
                  />
                </div>
              </div>
              
              <div className="benefits1-right">
                <h3 className="benefits1-subtitle">Great selection</h3>
                <p className="benefits1-text">
                  Enter any topic and our AI will generate a personalized quiz just for you. 
                  Dynamic question generation ensures fresh content every time. 
                  Questions tailored to provide the right level of challenge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits2 Section */}
        <div className="benefits2-section">
          <div className="benefits2-content">
            <div className="benefits2-layout">
              <div className="benefits2-left">
                <h3 className="benefits2-subtitle">Great selection</h3>
                <p className="benefits2-text">
                  Enter any topic and our AI will generate a personalized quiz just for you. 
                  Dynamic question generation ensures fresh content every time. 
                  Questions tailored to provide the right level of challenge.
                </p>
              </div>
              
              <div className="benefits2-right">
                <div className="benefits2-image-container">
                  <img 
                    src="/assets/images/Profil-Friends.webp" 
                    alt="Profil Friends" 
                    className="benefits2-image benefits2-image-friends"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits3 Section */}
        <div className="benefits3-section">
          <div className="benefits3-content">
            <div className="benefits3-layout">
              <div className="benefits3-left">
                <div className="benefits3-image-container">
                  <img 
                    src="/assets/images/Profil-Tab.webp" 
                    alt="Profil Tab" 
                    className="benefits3-image-profil"
                  />
                </div>
              </div>
              
              <div className="benefits3-right">
                <h3 className="benefits3-subtitle">Great selection</h3>
                <p className="benefits3-text">
                  Enter any topic and our AI will generate a personalized quiz just for you. 
                  Dynamic question generation ensures fresh content every time. 
                  Questions tailored to provide the right level of challenge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits4 Section */}
        <div className="benefits4-section">
          <div className="benefits4-content">
            <div className="benefits4-layout">
              <div className="benefits4-left">
                <h3 className="benefits4-subtitle">Great selection</h3>
                <p className="benefits4-text">
                  Enter any topic and our AI will generate a personalized quiz just for you. 
                  Dynamic question generation ensures fresh content every time. 
                  Questions tailored to provide the right level of challenge.
                </p>
              </div>
              
              <div className="benefits4-right">
                <div className="benefits4-image-container">
                  <img 
                    src="/assets/images/Statistics-Tab.webp" 
                    alt="Statistics Tab" 
                    className="benefits4-image-stats"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

  {/* Download Section */}
  <section className="download-section" id="download">
        <div className="download-content">
          <h2 className="download-title">Download app Quizzly Bears</h2>
          <div className="download-buttons">
            <img 
              src="/assets/images/apple-store.webp" 
              alt="Download on Apple App Store" 
              className="download-button"
            />
            <img 
              src="/assets/images/google-play.webp" 
              alt="Download on Google Play Store" 
              className="download-button"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <img 
            src="/assets/images/Logo-Bear-black.webp" 
            alt="Quizzly Bears Logo" 
            className="footer-logo"
          />
          <p className="footer-copyright">© 2025 Quizzly Bears. All rights reserved</p>
          <a 
            href="https://github.com/nimitaya/quizzly-bears" 
          target="_blank"
          rel="noopener noreferrer"
            className="footer-github"
          >
            <img 
              src="/assets/images/github.webp" 
              alt="GitHub Repository" 
              className="footer-github-icon"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
