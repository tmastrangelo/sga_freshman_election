document.addEventListener('DOMContentLoaded', function() {
    const confettiElement = document.querySelector('.confetti');
    const numConfetti = 100;

    for (let i = 0; i < numConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomize confetti starting position at bottom corners
        confettiPiece.style.left = (Math.random() > 0.5 ? 'calc(100% - ' : '') + Math.random() * 50 + 'px)';
        confettiPiece.style.bottom = '0';
        
        // Randomize animation duration and size
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.width = confettiPiece.style.height = Math.random() * 10 + 'px';
        
        confettiElement.appendChild(confettiPiece);
    }
});