//Question 1
const teamName = document.querySelector(".team-name");
const teamMembers = document.querySelector(".team-members");

teamName.innerHTML = "Group Name: Team-Apollo";
teamName.style.color = "darkcyan";
teamName.style.textAlign = "center";
teamName.style.marginTop = "30px";
teamName.style.fontSize = "32px";

teamMembers.innerHTML = '';
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');
let listItem4 = document.createElement('li');
let listItem5 = document.createElement('li');
let listItem6 = document.createElement('li');
let listItem7 = document.createElement('li');

listItem1.textContent = "Loveth Omokaro @Nutjob";
listItem2.textContent = "Avwunudiogba Ogaga @drew";
listItem3.textContent = "Stanley Chijioke @StanleyCeejay";
listItem4.textContent = "Shodipe Oladele @ladel";
listItem5.textContent = "Ifeoma Okafor @E4ma";
listItem6.textContent = "Kasie Ugwu @Kasie";
listItem7.textContent = "Anyanwu Chukwuemeka @khrisemeka";

teamMembers.appendChild(listItem1);
teamMembers.appendChild(listItem2);
teamMembers.appendChild(listItem3);
teamMembers.appendChild(listItem4);
teamMembers.appendChild(listItem5);
teamMembers.appendChild(listItem6);
teamMembers.appendChild(listItem7);



//Question 2
const teamMates = [
    "Nutjob", "Drew", "StanleyCeejay", "Ladel", "E4ma", "Kasie", "Khrisemeka"
];
console.log("Question 2: " + teamMates[4]);


//Question 3
let aboutMe = {
    firstName: 'Ifeoma',
    lastName: 'Okafor',
    bestMovie: 'Money Heist',
    bestFood: 'Moi-Moi',
    complexion: 'Chocolate',
    birthMonth: 'September',
    state: 'Anambra',
    groupName: 'Apollo'
};
console.log("Question 3: " + aboutMe.bestMovie);


//Question 4
let noun = "Earth";
let verb = "rotate";
let adjective = "spherical";

console.log("Question 4: see below ");
console.log("The " + noun + " is " + adjective + " in shape.");
console.log("A " + adjective + " object can " + verb + ".");
console.log("The " + noun + " " + verb + "s on its own axis.");
console.log("Just like every other " + adjective + " planet, the " + noun + " orbits the Sun.");
console.log(noun + " orbits the Sun once a year and " + verb + "s on its axis once a day."); 

//Question 5
function divisionRemainder(firstNumber, secondNumber) {
    let remainder = firstNumber % secondNumber;
    return remainder;
}

console.log("Question 5: " + divisionRemainder(30, 4));


//Question 6

function almightyFormula(a, b, c) {
    let positiveRoot = ((-1 * b) + Math.sqrt((b ** 2) - 4 * a * c))/(2 * a);
    let negativeRoot = ((-1 * b) - Math.sqrt((b ** 2) - 4 * a * c))/(2 * a);
    return("For the quadratic equation, 3x2 + 4x -2; x = " + positiveRoot + " or x = "+ negativeRoot + ".");
}

console.log("Question 6: " + almightyFormula(3, 4, -4));


//Question 7
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

console.log("Question 7: " + wordBlanks);


//Question 8
const PI = 3.142;
areaOfCircle = (r) => {
    let area = PI * (r ** 2);
    return ("The area of the circle with radius 9cm is " + area + "cm2.");
}

console.log("Question 8: " + areaOfCircle(9));


//Question 9
/*let p = "N8200";
let num = p.slice(1, 5);
console.log(num);

let num2 = parseFloat(num);
console.log(typeof(num2));
console.log(num2)

let r = "17.5%";
let rate = r.slice(0,4);
console.log(rate);

let num3 = parseFloat(rate);
console.log(typeof(num3));
console.log(num3)

t = "2.5years";
let time = t.slice(0, 3);
console.log(time);

let num4 = parseFloat(time);
console.log(typeof(num4));
console.log(num4)*/

let principle = "N8200";
let rate = "17.5%";
let time = "2.5years";

let p = parseFloat(principle.slice(1, 5));
let r = parseFloat(rate.slice(0.4));
let t = parseFloat(time.slice(0, 3));

let simpleInterest = (p * r * t)/100;
console.log("Question 9: N" + simpleInterest);


//Question 10
let result = 10 % 4;
console.log("Question 10: The result of 10 % 4 is " + result);

//Question 11
console.log("Question 11: see below ")
//for test data 1
let meritMass1 = 78;
let meritHeight1 = 1.69;

let nutjobMass1 = 92;
let nutjobHeight1 = 1.95;

let meritBMI1 = (meritMass1/(meritHeight1 ** 2));
console.log("Merit BMI for test data 1 = " + meritBMI1 + "kg/m2");

let nutjobBMI1 = (nutjobMass1/(nutjobHeight1 ** 2));
console.log("Nutjob BMI for test data 1 = " + nutjobBMI1 + "kg/m2");

let meritHigherBMI = (meritBMI1 > nutjobBMI1);
console.log(meritHigherBMI);

//for test data 2
let meritMass2 = 85;
let meritHeight2 = 1.76;

let nutjobMass2 = 95;
let nutjobHeight2 = 1.88;

let meritBMI2 = (meritMass2/(meritHeight2 ** 2));
console.log("Merit BMI for test data 2 = " + meritBMI2 + "kg/m2");

let nutjobBMI2 = (nutjobMass2/(nutjobHeight2 ** 2));
console.log("Nutjob BMI for test data 2 = " + nutjobBMI2 + "kg/m2");

let meritHigherBMI2 = (meritBMI2 > nutjobBMI2);
console.log(meritHigherBMI2);
