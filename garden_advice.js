/**
 * this returns gardening advice based on the season.
 * @param {string} season - the current season.
 * @returns {string} this is the advice message.
 */
function getSeasonAdvice(season) {
  if (season === "summer") {
    return "Water your plants regularly and provide some shade.\n";
  } else if (season === "winter") {
    return "Protect your plants from frost with covers.\n";
  }
  return "No advice for this season.\n";
}

/**
 * this returns gardening advice based on the plant type.
 * @param {string} plantType - the type of the plant.
 * @returns {string} this is the advice message.
 */
function getPlantAdvice(plantType) {
  if (plantType === "flower") {
    return "Use fertiliser to encourage blooms.";
  } else if (plantType === "vegetable") {
    return "Keep an eye out for pests!";
  }
  return "No advice for this type of plant.";
}

// these are hardcoded inputs for demonstration purposes (to be replaced with prompt() later)
const season = "summer";
const plantType = "flower";

// this combines the advice from both functions
const advice = getSeasonAdvice(season) + getPlantAdvice(plantType);

// this logs the generated advice to the console
console.log(advice);
