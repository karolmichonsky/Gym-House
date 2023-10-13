const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
})

const heightCalculator = document.querySelector('input[name="height"]');
const weightCalculator = document.querySelector('input[name="weight"]');
const submitCalculator = document.querySelector('input[name="submit-calc"]');
const bmiCalcResult = document.querySelector('.bmi-result');

submitCalculator.addEventListener("click", () => {
    const heightValue = heightCalculator.value;
    const weightValue = weightCalculator.value;
    const heightValueMeters = heightValue/100;
    let bmiResult = weightValue/(heightValueMeters*heightValueMeters);
    bmiResult = Math.round(bmiResult*100) /100;
    bmiCalcResult.textContent = "Twój wskaźnik BMI wynosi: "+ bmiResult;
})