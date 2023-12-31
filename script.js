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
const bmiBodyType = document.querySelector('.bmi-body-type');


submitCalculator.addEventListener("click", () => {
    const heightValue = heightCalculator.value;
    const weightValue = weightCalculator.value;
    const heightValueMeters = heightValue / 100;
    let bmiResult = weightValue/(heightValueMeters * heightValueMeters);
    bmiResult = Math.round(bmiResult * 100) /100;
    if(validateForm(heightValue, weightValue)){
        bmiCalcResult.textContent = "Twój wskaźnik BMI wynosi: " + bmiResult + " jest to " + findBodyType(bmiResult);
    }
    else{
        bmiCalcResult.textContent = "Podano błędne dane.\n" + "Spróbuj ponownie. ";
    }
})

function validateForm(heightValue, weightValue){
    if(heightValue>=100 && heightValue<=260 && weightValue>=20){
        return true;
    }
}

function findBodyType(bmi){
    const bmiRanges = [16, 17, 18.5, 25, 30, 35, 40];
    const bmiResults = ["wyglodzenie", "wychudzenie", "niedowaga", "wartość prawidłowa", "nadwaga", "1 stopień otyłości", "2 stopień otyłości", "otyłość skrajna"];
    for (let i = 0; i<bmiRanges.length; i++){
        if(bmi<bmiRanges[i]){
            return bmiResults[i];
        } 
    }
    return bmiResults[bmiResults.length-1];
}

document.getElementById("pricing-table").onmousemove = e => {
    for(const prices of document.getElementsByClassName("prices")) {
      const rect = prices.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
            prices.style.setProperty("--mouse-x", `${x}px`);
            prices.style.setProperty("--mouse-y", `${y}px`);
    };
  }