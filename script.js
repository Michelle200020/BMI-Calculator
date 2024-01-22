// Michelle Miranda 22112023

function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);

    const bmi = weight / ((height / 100) ** 2);
    const category = getBMICategory(bmi, gender, age);

    document.getElementById('result').innerHTML = `Your BMI: ${bmi.toFixed(2)}<br>Category: ${category}`;


  
}

function getBMICategory(bmi, gender, age) {
    if (age < 18) {
        return 'BMI categories are not applicable for individuals under 18.';
    }

    if (gender === 'male') {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    } else if (gender === 'female') {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    } else {
        return 'Invalid gender';
    }
}


