document.addEventListener('DOMContentLoaded', function() {
    const confettiElement = document.querySelector('.confetti');
    const numConfetti = 150; // More confetti for better coverage

    for (let i = 0; i < numConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomly choose if confetti comes from the top or bottom
        const fromTop = Math.random() > 0.5;
        confettiPiece.style.top = fromTop ? '0' : 'auto';
        confettiPiece.style.bottom = fromTop ? 'auto' : '0';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        
        // Randomize size and animation duration
        confettiPiece.style.width = Math.random() * 10 + 'px';
        confettiPiece.style.height = Math.random() * 15 + 'px';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';

        // Assign a random color using hsl() in JavaScript
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        // Append confetti to the confetti container
        confettiElement.appendChild(confettiPiece);
    }
});