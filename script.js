const calculateButton = document.getElementById("calculate-button");
const fileSizeInput = document.getElementById("file-size");
const fileSizeUnitInput = document.getElementById("file-size-unit");
const downloadSpeedInput = document.getElementById("download-speed");
const downloadSpeedUnitInput = document.getElementById("download-speed-unit");
const resultDaysSpan = document.getElementById("result-days");
const resultHoursSpan = document.getElementById("result-hours");
const resultMinutesSpan = document.getElementById("result-minutes");

calculateButton.addEventListener("click", function() {
  const fileSize = fileSizeInput.valueAsNumber * getMultiplier(fileSizeUnitInput.value);
  const downloadSpeed = downloadSpeedInput.valueAsNumber * getMultiplier(downloadSpeedUnitInput.value);

  const downloadTimeInSeconds = fileSize / downloadSpeed;

  const days = Math.floor(downloadTimeInSeconds / (24 * 60 * 60));
  const hours = Math.floor((downloadTimeInSeconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((downloadTimeInSeconds % (60 * 60)) / 60);

  resultDaysSpan.textContent = days;
  resultHoursSpan.textContent = hours;
  resultMinutesSpan.textContent = minutes;
});

function getMultiplier(unit) {
  switch (unit) {
    case "KB":
      return 1024;
    case "MB":
      return 1024 * 1024;
    case "GB":
      return 1024 * 1024 * 1024;
    case "TB":
      return 1024 * 1024 * 1024 * 1024;
    case "kbit":
      return 1000 / 8;
    case "Mbit":
      return 1000 * 1000 / 8;
    case "Gbit":
      return 1000 * 1000 * 1000 / 8;
    default:
      return 1000;
  }
}
