function hello(){
    return "hello";
}

// convert temperature in *celsius* to *fahrenheit*
function celsius2fahrenheit(celsius){
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}


export {hello,celsius2fahrenheit,kilo2Miles,numeric2letterGrade,volumeofCylinder};

// Question 1: convert distance in *kilometers* to *miles*
function kilo2Miles(kilometers){
    let miles = kilometers * 0.621371
    return Math.round(miles);
}

// Question 2: convert numeric grade to corresponding letter grade
function numeric2letterGrade(numericGrade){
    let letterGrade;
    if(numericGrade>= 90) {
        letterGrade = 'A+';
    }else if (numericGrade>= 80) {
        letterGrade = 'A';
    }else if (numericGrade>= 70) {
        letterGrade = 'B';
    }else if (numericGrade>= 60) {
        letterGrade = 'C';
    }else if (numericGrade>=50) {
        letterGrade = 'D';
    }else {
        letterGrade = 'You failed';
    }
    return letterGrade;
}

// Question 3: calculate the volume of a cylinder
function volumeofCylinder(diamater,height){
    let radius = diamater / 2;
    let volume = Math.PI * Math.pow(radius,2)* height;
    return Math.round(volume);
}