// Einfache Ping-Pong-Bewegung für alle Elemente
class SimpleMovingElement {
    constructor(element, x, y, speedX, speedY, width, height, shouldRotate = true, elementType = 'default') {
        this.element = element;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.width = width;
        this.height = height;
        this.rotation = 0;
        this.shouldRotate = shouldRotate;
        this.rotationSpeed = shouldRotate ? (Math.random() * 4 + 1) * 0.67 : 0; // 33% langsamer
        this.elementType = elementType; // Für Kollisionserkennung zwischen Logos
    }

    update() {
        // Position aktualisieren
        this.x += this.speedX;
        this.y += this.speedY;

        // An Bildschirmrändern abprallen
        if (this.x + this.width >= window.innerWidth || this.x <= 0) {
            this.speedX = -this.speedX;
        }
        if (this.y + this.height >= window.innerHeight || this.y <= 0) {
            this.speedY = -this.speedY;
        }

        // Position korrigieren, falls außerhalb des Bildschirms
        if (this.x < 0) this.x = 0;
        if (this.x + this.width > window.innerWidth) this.x = window.innerWidth - this.width;
        if (this.y < 0) this.y = 0;
        if (this.y + this.height > window.innerHeight) this.y = window.innerHeight - this.height;

        // Rotation aktualisieren
        if (this.shouldRotate) {
            this.rotation += this.rotationSpeed;
        }

        // DOM-Element aktualisieren
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        
        if (this.shouldRotate) {
            this.element.style.transform = `rotate(${this.rotation}deg)`;
        } else {
            this.element.style.transform = 'rotate(0deg)';
        }
    }

    // Einfache Kollisionserkennung zwischen Logos
    checkCollisionWith(other) {
        // Nur Logos kollidieren miteinander
        if (this.elementType !== 'logo' || other.elementType !== 'logo') {
            return;
        }

        const centerX1 = this.x + this.width / 2;
        const centerY1 = this.y + this.height / 2;
        const centerX2 = other.x + other.width / 2;
        const centerY2 = other.y + other.height / 2;

        const distance = Math.sqrt((centerX1 - centerX2) ** 2 + (centerY1 - centerY2) ** 2);
        const minDistance = (this.width + other.width) / 4; // Mittlerer Wert zwischen /3 und /6 für moderate Überschneidung

        if (distance < minDistance) {
            // Einfaches Abstoßen: Geschwindigkeiten umkehren
            this.speedX = -this.speedX;
            this.speedY = -this.speedY;
            other.speedX = -other.speedX;
            other.speedY = -other.speedY;

            // Elemente etwas voneinander wegbewegen
            const angle = Math.atan2(centerY1 - centerY2, centerX1 - centerX2);
            const moveDistance = (minDistance - distance) / 2;
            
            this.x += Math.cos(angle) * moveDistance;
            this.y += Math.sin(angle) * moveDistance;
            other.x -= Math.cos(angle) * moveDistance;
            other.y -= Math.sin(angle) * moveDistance;
        }
    }
}

// Globale Arrays für alle Elemente
let allElements = [];
let questionMarks = [];
let logoBear = null;
let logoText = null;

// Erstelle schwebende Fragezeichen mit einfacher Ping-Pong-Bewegung
function createQuestionMarks() {
    const container = document.getElementById('container');
    const questionMarkCount = 8;

    for (let i = 0; i < questionMarkCount; i++) {
        const questionMark = document.createElement('img');
        questionMark.src = 'assets/question-mark.webp';
        questionMark.className = 'question-mark';
        questionMark.alt = 'Question Mark';
        
        // Zufällige Startposition und Geschwindigkeit (33% langsamer)
        const x = Math.random() * (window.innerWidth - 80);
        const y = Math.random() * (window.innerHeight - 80);
        const speedX = (Math.random() - 0.5) * 6 * 0.67; // -2 bis 2 (statt -3 bis 3)
        const speedY = (Math.random() - 0.5) * 6 * 0.67;
        
        container.appendChild(questionMark);
        
        // Fragezeichen sollen sich drehen (keine Kollision)
        const movingElement = new SimpleMovingElement(questionMark, x, y, speedX, speedY, 80, 80, true, 'question-mark');
        questionMarks.push(movingElement);
        allElements.push(movingElement);
    }
}

// Erstelle ein permanentes Logo Bear mit einfacher Ping-Pong-Bewegung
function createLogoBear() {
    const container = document.getElementById('container');
    const logoBearElement = document.createElement('img');
    logoBearElement.src = 'assets/Logo-Bear-green-black.webp';
    logoBearElement.className = 'logo-bear';
    logoBearElement.alt = 'Logo Bear';
    logoBearElement.style.zIndex = '3'; // Höherer z-index als Logo Text
    
    // Zufällige Startposition und Geschwindigkeit (zusätzlich 30% langsamer für Logos)
    const x = Math.random() * (window.innerWidth - 160);
    const y = Math.random() * (window.innerHeight - 160);
    const speedX = (Math.random() - 0.5) * 8 * 0.67 * 0.7; // -1.9 bis 1.9 (zusätzlich 30% langsamer)
    const speedY = (Math.random() - 0.5) * 8 * 0.67 * 0.7;
    
    container.appendChild(logoBearElement);
    
    // Logo Bear soll sich NICHT drehen aber mit anderen Logos kollidieren
    logoBear = new SimpleMovingElement(logoBearElement, x, y, speedX, speedY, 160, 160, false, 'logo');
    allElements.push(logoBear);
}

// Erstelle ein permanentes Logo Text mit einfacher Ping-Pong-Bewegung
function createLogoText() {
    const container = document.getElementById('container');
    const logoTextElement = document.createElement('img');
    logoTextElement.src = 'assets/Logo-Text.webp';
    logoTextElement.className = 'logo-text';
    logoTextElement.alt = 'Logo Text';
    logoTextElement.style.zIndex = '2'; // Niedrigerer z-index als Logo Bear
    
    // Zufällige Startposition und Geschwindigkeit (zusätzlich 30% langsamer für Logos)
    const x = Math.random() * (window.innerWidth - 280);
    const y = Math.random() * (window.innerHeight - 100);
    const speedX = (Math.random() - 0.5) * 7 * 0.67 * 0.7; // -1.6 bis 1.6 (zusätzlich 30% langsamer)
    const speedY = (Math.random() - 0.5) * 7 * 0.67 * 0.7;
    
    container.appendChild(logoTextElement);
    
    // Logo Text soll sich NICHT drehen aber mit anderen Logos kollidieren
    logoText = new SimpleMovingElement(logoTextElement, x, y, speedX, speedY, 280, 100, false, 'logo');
    allElements.push(logoText);
}

// Einfache Update-Loop
function updateMovement() {
    // Alle Elemente aktualisieren
    allElements.forEach(element => {
        element.update();
    });

    // Keine Kollisionen mehr zwischen Logos - sie ignorieren sich gegenseitig

    // Kontinuierlich mit 60 FPS
    requestAnimationFrame(updateMovement);
}

// Starte die Animationen
function startAnimations() {
    // Erstelle alle Elemente einmalig
    createQuestionMarks();
    createLogoBear();
    createLogoText();
    
    // Starte die einfache Bewegung
    updateMovement();
}

// Window Resize Handler
window.addEventListener('resize', () => {
    // Elemente neu positionieren, falls sie außerhalb des Bildschirms sind
    allElements.forEach(element => {
        if (element.x > window.innerWidth - element.width) {
            element.x = window.innerWidth - element.width;
        }
        if (element.y > window.innerHeight - element.height) {
            element.y = window.innerHeight - element.height;
        }
    });
});

// Starte alles wenn die Seite geladen ist
window.addEventListener('load', startAnimations);

// Fehlerbehandlung für fehlende Bilder
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Bild nicht gefunden:', e.target.src);
        e.target.style.backgroundColor = 'rgba(143, 212, 11, 0.3)';
        e.target.style.border = '2px dashed var(--lightGreen)';
        e.target.style.display = 'flex';
        e.target.style.alignItems = 'center';
        e.target.style.justifyContent = 'center';
        e.target.style.fontSize = '14px';
        e.target.style.color = 'var(--black)';
        e.target.innerHTML = e.target.alt || 'Bild';
    }
}, true); 