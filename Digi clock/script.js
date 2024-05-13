function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const mseconds = String(now.getMilliseconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}:${mseconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Update the time every milisecond
  setInterval(updateTime, 1);
  
  
  // Initial call to display the time immediately
  updateTime();