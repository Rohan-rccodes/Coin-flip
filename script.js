// Select elements from DOM
const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flip-btn");
const resultText = document.getElementById("result-text");

// Add click event to the Flip Coin button
flipBtn.addEventListener("click", () => {
  // Generate random result
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  // Add flip animation
  coin.style.transform = "rotateY(360deg)";

  // Delay image swap for realism
  setTimeout(() => {
    // Change coin image based on result
    coin.src = `images/${result.toLowerCase()}.svg`;

    // Reset rotation for next flip
    coin.style.transform = "rotateY(0deg)";

    // Update text
    resultText.textContent = `${result}`;
  }, 300);
});
