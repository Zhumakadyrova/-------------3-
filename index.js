let myName = "Nagima";

console.log(myName);
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.length);

let pi = 3.141495;

console.log(pi);
console.log(pi.toFixed(2));
console.log(pi.toFixed(0));

let example1 = 2 + 2;
let example2 = 25 - 5;
let example3 = 5 * 6;
let example4 = 60 / 12;

let example5 = 2 ** 4;
let example6 = 81 ** (1/2);
let example7 = 27 ** (1 /3);

let example8 = 5 % 2;

let example9 = (41 - 7) * 3;
let example10 = 5 * 2 + 3 * 4;

let example11 = "5" + 5;
let exampe12 = "5" / 5;
let exampe13 = "a" / "b";
let example14 = "Hello" + "World";

let height = 5;
let width = 8;
let triangleArea = height * width / 2;
console.log("Площадь треугольника = " + triangleArea);

let hours = 56;
let minutes = 60;
let summary = hours * minutes;
console.log("Минуты в 56 часах = " + summary);

let days = 8;
let perHour = 50;
let hour = 8;
let salary = days * perHour * hour;
console.log("Зарплата за 8 дней ="  + salary);

let bill = 1566;
let tips = 15;
let percent = 100;
let billTips = bill / percent * tips;
console.log("Счет = " + billTips);

let ball = 8;
let ball2 = 6;
let goal = 2;
let goal2 = 3;
let results = ball * goal + ball2 * goal2; 
console.log ("final = " + results);

let cow = 5;
let chick = 6;
let ship = 12;
let foot =2;
let feet = 4;
let total = (cow * feet) + ( chick * foot) + (ship * feet);
console.log ("Количество ног на ферме = " + total);

let petrol = 22;
let distance = 100;
let petrol2 = (distance / petrol);
console.log ("Сколько км на 100 литров = " + petrol2);

let lightSwitchOn = false;
let windowIsOpen = false;

let example21 = 5 > 10;
let example22 = 5 < 10;
let exammple23 = 5 >= 10;
let example24 = 10 === 10;
let example25 = 5 !==10;

if (lightSwitchOn) {
  console.log("Switch is on");
}
else {
  console.log("Switch is off");
}

let a = 5;
let b = 5;
if (a !==b){
  console.log("A equal B");
}
else {
  console.log("A is not equal to B");
}
let students = 15;
let capacity = 20;
if(students <= capacity) {
  console.log("Студенты поместятся");
}
else {
  console.log("Студенты не поместятся");
}

console.log("The capital of KR?");
let answer = "Bishkek";
if (answer === "Bishkek" || answer === "bishkek"){
  console.log("correct");
}
else {
  console.log("incorrect")
};

let login = "ElonMusk";
let password = "I'm the best";
if (login === "ElonMusk" && password === "I'm the best") {
  console.log("Correct");
}
else {
  console.log ("incorrect");
}
let place = 20;
tourists = 20;
if (tourists <= place) {
  console.log("possible");
}
else {
  console.log (" impossible");
}