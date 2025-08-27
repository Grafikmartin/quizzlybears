import React, { useEffect } from 'react';

const AnimatedQuestionMarks: React.FC = () => {
  useEffect(() => {
    // Lade das externe JavaScript für die animierten Elemente
    const script = document.createElement('script');
    script.src = '/assets/script-zurAnsicht.js';
    script.async = true;
    document.body.appendChild(script);

    // Erstelle den Container für die animierten Elemente
    const container = document.createElement('div');
    container.id = 'container';
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
      pointer-events: none;
    `;
    document.body.appendChild(container);

    return () => {
      // Cleanup: Entferne das Skript und den Container
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };
  }, []);

  // Diese Komponente rendert nichts, sie lädt nur das externe Skript
  return null;
};

export default AnimatedQuestionMarks;
