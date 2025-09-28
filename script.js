// Get the needed elements
const countText = document.getElementById("attendeeCount");
const nameInput = document.getElementById("attendeeName");
const form = document.getElementById("checkInForm");
const greeting = document.getElementById("greeting");
const teamSelect = document.getElementById("teamSelect");
const progressBar = document.getElementById("progressBar");

// Track the attendance
let count = 0;
const maxCount = 50;

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Increment attendance counter
  count++;
  countText.textContent = count;
  progressBar.style.width = Math.round((count / maxCount) * 100) + "%";

  // Display the welcome message
  const name = nameInput.value;
  const teamName = teamSelect.selectedOptions[0].text;
  const message = `Welcome, ${name} from ${teamName}!`;
  greeting.textContent = message;
  greeting.style.display = "block";

  // Update the team stats
  const team = teamSelect.value;
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  form.reset();
});
