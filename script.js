function welcomeMessage() {
  alert("Welcome to your English Grammar learning site!");
}
/* =========================
   LESSON AUTO ANIMATION
========================= */

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll('.lesson-card').forEach(card => {
  observer.observe(card);
});
// Animate vocabulary cards when page loads
const vocabCards = document.querySelectorAll('.card');

vocabCards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(60px) scale(0.95) rotateX(6deg)';
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0) scale(1) rotateX(0)';
  }, index * 150); // stagger animation
});
