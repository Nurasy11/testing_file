// let number=5;
// const leftBorderWidth=1;
// var rightBorderWidth=12;

// number=15;
// console.log(number);


// let userName="John",
// userNumber=25;
// userNumber=24;
// console.log(userNumber);
// // npm init
// // npm init @eslint/config


// let storeName="Bereke";

// let storeDescription={
//     budget: 10000,
//     employees: ["John","Anna", "Alice"],
//     products:{
//     milk:500,
//     cola:450

//     },
//     open:true
// }


// const questions = confirm('Are you sure you want to go with me?');
// console.log(questions);
const answers =[];
answers[0] = +prompt ("Вам есть восемнадцать?", "");
if (answers[0]>=18){
    answers[1] = prompt ("как ваше имя?", "");
    answers[2] = prompt ("как ваше фамилия?", "");
}
else{
    alert("Sorry, you is small")
}


console.log(answers);


