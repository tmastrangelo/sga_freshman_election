// Simple confetti effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const confettiElement = document.querySelector('.confetti');
    for (let i = 0; i < 150; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiElement.appendChild(confettiPiece);
    }
});