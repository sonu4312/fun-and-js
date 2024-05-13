// bmi = w/((h/100)**2)

function calcBMI() {
  const height = parseFloat(document.getElementById("height").value);

  const weight = parseFloat(document.getElementById("weight").value);

  const bmi = weight / (height / 100) ** 2;

  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById("results").innerText =
      "Please enter a valid height and weight.";
    return;
  }

  const bmiCategory = getCategory(bmi);

  document.getElementById("results").innerHTML = `Your BMI is ${bmi.toFixed(
    2
  )}. You are ${bmiCategory}.`;
}

function getCategory(bmi) {
  if (bmi <= 18.6) {
    return "Under Weight";
  } else if (bmi > 18.6 && bmi <= 24.9) {
    return "Normal Weight";
  } else if (bmi > 24.9 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
