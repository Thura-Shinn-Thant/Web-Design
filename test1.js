let total = 0;
// parameter
function calculator (firstNumber, secondNumber){
    total = firstNumber * secondNumber;
    total += 4;
    total /= 2;
}
calculator(6, 2);

//object

const name = 'Aung Aung';
const age = 10;
const dateOfBirth = 1200;
let email = 'aungaung@gmail.com';

//creating object

let participant1 = {
name : 'Aung Aung',
age : 20,
dateOfBirth: 1300,
email : 'aung2@gmail.com',
isRunner: true,
// function of object ["is genrally called method of the object"]
run: ()=> {
alert ('Participant Aung Aung is running through the river......')
}
}

//dot notation
participant1.age
participant1.run()
//bracket notation
participant1['name']
participant1['age']
participant1['run']()

//OBJECT PART2
const person2 = {
name : 'Aung Aung',
age : 20,
dateOfBirth: 1300,
email : 'aung2@gmail.com',
isRunner: true,
// function of object ["is genrally called method of the object"]
run: ()=> {
alert ('Participant Aung Aung is running through the river......')
}
}
 //Setting new properties and method
const inputName = "";
const inputAmt = "";
const DonorName = "Donatedby" + inputName;




