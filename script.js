document.addEventListener("DOMContentLoaded", function () {
  //const addressInput = document.getElementById("address");
  const tiltInput = document.getElementById("tilt");
  const azimuthInput = document.getElementById("azimuth");
  const sunriseInput = document.getElementById("sunrise");
  const sunsetInput = document.getElementById("sunset");
  const calculateButton = document.getElementById("calculate");
  const resetButton = document.getElementById("reset");
  const resultsDiv = document.getElementById("results");

  // Initially hide the results div
  resultsDiv.style.display = "none";

  calculateButton.addEventListener("click", function () {
    // Remove any existing warning messages
    removeWarningMessages();

    // Get user input values
    //let address = addressInput.value;
    let tilt = parseFloat(tiltInput.value);
    let azimuth = parseFloat(azimuthInput.value);
    let sunrise = parseTime(sunriseInput.value);
    let sunset = parseTime(sunsetInput.value);

    if (tilt <= 0 || azimuth <= 0 || !sunrise || !sunset) {
      if (tilt <= 0) {
        displayWarningMessage(tiltInput, "Please enter a valid angle!");
      }
      if (azimuth <= 0) {
        displayWarningMessage(azimuthInput, "Please enter a valid angle!");
      }
      if (!sunrise) {
        displayWarningMessage(
          sunriseInput,
          "Please enter a valid sunrise time!"
        );
      }
      if (!sunset) {
        displayWarningMessage(sunsetInput, "Please enter a valid sunset time!");
      }
      return;
    }
    if (isNaN(tilt) || isNaN(azimuth)) {
      if (isNaN(tilt)) {
        displayWarningMessage(tiltInput, "Please enter a valid tilt angle!");
      }
      if (isNaN(azimuth)) {
        displayWarningMessage(
          azimuthInput,
          "Please enter a valid azimuth angle!"
        );
      }
      return;
    }

    // Calculate peak sun hours
    let now = new Date();
   // let times = SunCalc.getTimes(now, addressInput.value);
    sunrise = parseTime(sunriseInput.value);
    sunset = parseTime(sunsetInput.value);
    let peakSunHours = calculatePeakSunHours(sunrise, sunset, tilt, azimuth);

    // Display the result
    resultsDiv.innerHTML = `The Average Peak Sun Hours is: ${peakSunHours.toFixed(
      2
    )} hours`;
    // Show the results div
    resultsDiv.style.display = "block";
    // Scroll to the results div
    resultsDiv.scrollIntoView({ behavior: "smooth" });
  
  });

  resetButton.addEventListener("click", function () {
    // Clear input fields and results
  //  addressInput.value = "";
    tiltInput.value = "";
    azimuthInput.value = "";
    sunriseInput.value = "";
    sunsetInput.value = "";
    resultsDiv.innerHTML = "";
    resultsDiv.style.display = "none";
    removeWarningMessages();
  });
  function calculatePeakSunHours(sunrise, sunset, tilt, azimuth) {
    // Convert tilt and azimuth angles to radians
    let tiltRad = (tilt * Math.PI) / 180;
    let azimuthRad = (azimuth * Math.PI) / 180;

    // Calculate duration of daylight in hours
    let daylightHours = (sunset - sunrise) / 3600000;

    // Calculate peak sun hours using a simple formula
    let peakSunHours =
      daylightHours *
      (Math.sin(tiltRad) * Math.sin(0.5 * Math.PI - Math.abs(azimuthRad)));
    if (peakSunHours < 0) {
      peakSunHours = peakSunHours * -1;
    }

    return peakSunHours;
  }

  function displayWarningMessage(inputElement, message) {
    // Create a warning message element
    const warningElement = document.createElement("div");
    warningElement.className = "warning-message";
    warningElement.textContent = message;

    // Insert the warning message below the input field
    inputElement.parentNode.appendChild(warningElement);
  }

  function removeWarningMessages() {
    const warningMessages = document.querySelectorAll(".warning-message");
    warningMessages.forEach((warningMessage) => {
      warningMessage.parentNode.removeChild(warningMessage);
    });
  }

  function parseTime(timeStr) {
    // Convert timeStr to a string to ensure it's a string type
    timeStr = String(timeStr);
    const parts = timeStr.split(":");
    if (parts.length === 2) {
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);
      if (!isNaN(hours) && !isNaN(minutes)) {
        let date = new Date();
        date.setHours(hours, minutes, 0, 0);
        return date;
      }
    }
    return null; // Return null for invalid input
  }
});
