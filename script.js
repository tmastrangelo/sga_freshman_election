document.addEventListener('DOMContentLoaded', function() {
    const confettiElement = document.querySelector('.confetti');
    const numConfetti = 100; // Number of confetti pieces

    for (let i = 0; i < numConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomly place confetti near the left or right corners of the screen
        const isRight = Math.random() > 0.5;
        confettiPiece.style.left = isRight ? (Math.random() * 20 + 80) + 'vw' : (Math.random() * 20) + 'vw';
        confettiPiece.style.bottom = '0';
        
        // Randomize color for each piece
        confettiPiece.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        
        // Randomize animation duration and size
        confettiPiece.style.animationDuration = Math.random() * 2 + 3 + 's';
        confettiPiece.style.width = Math.random() * 10 + 5 + 'px';
        confettiPiece.style.height = Math.random() * 15 + 5 + 'px';
        
        confettiElement.appendChild(confettiPiece);
    }
});