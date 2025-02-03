// Function to update time dynamically
function updateTime() {
    const timeElement = document.querySelector("[data-testid='currentTimeUTC']");
    console.log(timeElement)
    const now = new Date();
    timeElement.textContent = now.toISOString();
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  updateTime();
  