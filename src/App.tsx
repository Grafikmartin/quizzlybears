

import React, { useEffect, useRef } from 'react';
import './design-system.css';
import './App.css';

function App() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefits1Ref = useRef<HTMLDivElement>(null);
  const benefits2Ref = useRef<HTMLDivElement>(null);
  const benefits3Ref = useRef<HTMLDivElement>(null);
  const benefits4Ref = useRef<HTMLDivElement>(null);

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

  // Bidirektionale Animation für Benefits1
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Finde die zu animierenden Elemente
          const imageContainer = entry.target.querySelector('.benefits1-image-container');
          const image = entry.target.querySelector('.benefits1-image-duell');
          
          if (imageContainer && image) {
            if (entry.isIntersecting) {
              // Element kommt ins Viewport - Animation vorwärts
              (imageContainer as HTMLElement).classList.remove('animate-out');
              (image as HTMLElement).classList.remove('animate-out');
              (imageContainer as HTMLElement).classList.add('animate-in');
              (image as HTMLElement).classList.add('animate-in');
            } else {
              // Element verlässt das Viewport - Animation rückwärts
              (imageContainer as HTMLElement).classList.remove('animate-in');
              (image as HTMLElement).classList.remove('animate-in');
              (imageContainer as HTMLElement).classList.add('animate-out');
              (image as HTMLElement).classList.add('animate-out');
            }
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -35% 0px' // Trigger when 35vh from bottom
      }
    );

    if (benefits1Ref.current) {
      observer.observe(benefits1Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation für Benefits2 (von rechts)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageContainer = entry.target.querySelector('.benefits2-image-container');
          const image = entry.target.querySelector('.benefits2-image-friends');
          
          if (imageContainer && image) {
            if (entry.isIntersecting) {
              (imageContainer as HTMLElement).classList.remove('animate-out-right');
              (image as HTMLElement).classList.remove('animate-out-right');
              (imageContainer as HTMLElement).classList.add('animate-in-right');
              (image as HTMLElement).classList.add('animate-in-right');
            } else {
              (imageContainer as HTMLElement).classList.remove('animate-in-right');
              (image as HTMLElement).classList.remove('animate-in-right');
              (imageContainer as HTMLElement).classList.add('animate-out-right');
              (image as HTMLElement).classList.add('animate-out-right');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -35% 0px' }
    );

    if (benefits2Ref.current) {
      observer.observe(benefits2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation für Benefits3 (von links)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageContainer = entry.target.querySelector('.benefits3-image-container');
          const image = entry.target.querySelector('.benefits3-image-profil');
          
          if (imageContainer && image) {
            if (entry.isIntersecting) {
              (imageContainer as HTMLElement).classList.remove('animate-out-left');
              (image as HTMLElement).classList.remove('animate-out-left');
              (imageContainer as HTMLElement).classList.add('animate-in-left');
              (image as HTMLElement).classList.add('animate-in-left');
            } else {
              (imageContainer as HTMLElement).classList.remove('animate-in-left');
              (image as HTMLElement).classList.remove('animate-in-left');
              (imageContainer as HTMLElement).classList.add('animate-out-left');
              (image as HTMLElement).classList.add('animate-out-left');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -35% 0px' }
    );

    if (benefits3Ref.current) {
      observer.observe(benefits3Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animation für Benefits4 (von rechts)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const imageContainer = entry.target.querySelector('.benefits4-image-container');
          const image = entry.target.querySelector('.benefits4-image-stats');
          
          if (imageContainer && image) {
            if (entry.isIntersecting) {
              (imageContainer as HTMLElement).classList.remove('animate-out-right');
              (image as HTMLElement).classList.remove('animate-out-right');
              (imageContainer as HTMLElement).classList.add('animate-in-right');
              (image as HTMLElement).classList.add('animate-in-right');
            } else {
              (imageContainer as HTMLElement).classList.remove('animate-in-right');
              (image as HTMLElement).classList.remove('animate-in-right');
              (imageContainer as HTMLElement).classList.add('animate-out-right');
              (image as HTMLElement).classList.add('animate-out-right');
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -35% 0px' }
    );

    if (benefits4Ref.current) {
      observer.observe(benefits4Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
                    <img src="/quizzlybears/assets/images/Logo-Bear-green-black.webp" alt="Quizzly Bears Logo" className="logo-bear" />
        <img src="/quizzlybears/assets/images/Logo-Text.webp" alt="Quizzly Bears Text" className="logo-text" />
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
              <a href="#download" className="hero-button">Download</a>
            </div>
            <div className="hero-right">
              <img 
                src="/quizzlybears/assets/images/play-start-solo.webp" 
                alt="Play Start Solo" 
                className="hero-image" 
              />
            </div>
          </div>
        </section>

        {/* Project Introduction Section */}
        <section className="project-intro-section">
          <div className="project-intro-content">
            <h2 className="project-intro-title">About Quizzly Bears</h2>
            <p className="project-intro-text">
              Your search is over: The perfect quiz app is here.
              The Quizzly Bears app was created with one goal in mind: to give you a smooth and entertaining experience. Every detail, from the point system to language selection, was designed to be intuitive and playful.
              Learn effortlessly with AI-driven topic selection that adapts to your progress. Challenge your friends in exciting duels and track your development with detailed statistics and medals.
              Experience it for yourself: a well-thought-out user journey that's easy to use and to the point. You'll feel comfortable from the very first second.
            </p>
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
        <div className="benefits1-section" id="benefits" ref={benefits1Ref}>
          <div className="benefits1-content">
            <h2 className="benefits1-title">Benefits Quizzly Bears</h2>
            
            <div className="benefits1-layout">
              <div className="benefits1-left">
                <div className="benefits1-image-container">
                  <img 
                    src="/quizzlybears/assets/images/benefitsYourTopic.webp" 
                    alt="Your Topic Benefits" 
                    className="benefits1-image benefits1-image-duell"
                  />
                </div>
              </div>
              
              <div className="benefits1-right">
                <h3 className="benefits1-subtitle">Your Topic, Your Quiz</h3>
                <p className="benefits1-text">
                Pick any topic – and Qizzly Bears’ AI instantly creates your very own personalized quiz.
                No boredom: every round brings fresh, dynamic questions with just the right level of challenge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits2 Section */}
        <div className="benefits2-section" ref={benefits2Ref}>
          <div className="benefits2-content">
            <div className="benefits2-layout">
              <div className="benefits2-left">
                <h3 className="benefits2-subtitle">Smart Adaption – Maximum Flow</h3>
                <p className="benefits2-text">
                Our AI learns from your answers and automatically adjusts the difficulty.
From “Cub Curious” (easy) to “Grizzly Guru” (hard) – find your perfect level.
We’ve combined smooth gameplay with a modern design to make quizzing more fun than ever before. 
                </p>
              </div>
              
              <div className="benefits2-right">
                <div className="benefits2-image-container">
                  <img 
                    src="/quizzlybears/assets/images/benefitsGame.webp" 
                    alt="Game Benefits" 
                    className="benefits2-image benefits2-image-friends"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits3 Section */}
        <div className="benefits3-section" ref={benefits3Ref}>
          <div className="benefits3-content">
            <div className="benefits3-layout">
              <div className="benefits3-left">
                <div className="benefits3-image-container">
                  <img 
                    src="/quizzlybears/assets/images/benefitsStatistics.webp" 
                    alt="Statistics Benefits" 
                    className="benefits3-image-profil"
                  />
                </div>
              </div>
              
              <div className="benefits3-right">
                <h3 className="benefits3-subtitle">Points, Medals & Glory</h3>
                <p className="benefits3-text">
                Collect points, earn bronze, silver and gold medals, and track your progress as you level up.
                Challenge your friends on the leaderboards and claim the crown as the ultimate Quizzly Bears Master.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits4 Section */}
        <div className="benefits4-section" ref={benefits4Ref}>
          <div className="benefits4-content">
            <div className="benefits4-layout">
              <div className="benefits4-left">
                <h3 className="benefits4-subtitle">Offline Relaxation</h3>
                <p className="benefits4-text">
                  Enjoy classic mini-games like Snake, Space Invaders and Ping Pong even offline. 
                  Perfect for breaks and relaxation between quiz rounds.
                </p>
              </div>
              
              <div className="benefits4-right">
                <div className="benefits4-image-container">
                  <img 
                    src="/quizzlybears/assets/images/benefitsMinigames.webp" 
                    alt="Minigames Benefits" 
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
            <div className="download-button-container">
              <div className="coming-soon-badge">Coming Soon</div>
              <img 
                src="/quizzlybears/assets/images/apple-store.webp" 
                alt="Download on Apple App Store" 
                className="download-button"
              />
            </div>
            <div className="download-button-container">
              <div className="coming-soon-badge">Coming Soon</div>
              <img 
                src="/quizzlybears/assets/images/google-play.webp" 
                alt="Download on Google Play Store" 
                className="download-button"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-line"></div>
        <div className="footer-content">
          <img 
            src="/quizzlybears/assets/images/Logo-Bear-green-black.webp" 
            alt="Quizzly Bears Logo" 
            className="footer-logo"
          />
          <p className="footer-copyright">
            © 2024 Quizzly Bears. All rights reserved.
          </p>
          <p className="footer-developers">
            Developers Quizzly Bears: Maryna Rozhkova, Sonja Schweren, Natallia Karatava, Vadim Zbanok, Martin Borth
          </p>
          <p className="footer-operation">
            This website is operated by Martin Borth and Natallia Karatava
          </p>
          <a 
            href="https://github.com/nimitaya/quizzly-bears" 
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
          >
            <img 
              src="/quizzlybears/assets/images/github.webp" 
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
