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

const handleOnMouseMove = pricingGlow => {
    const { currentTarget: target } = pricingGlow;

    const bound = target.getBoundingClientRect(),
        x = pricingGlow.clientX - bound.left,
        y = pricingGlow.clientY - bound.top;

    target.style.setProperty("--mouse-x", '${x}px');
    target.style.setProperty("--mouse-y", '${y}px');
}