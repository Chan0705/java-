// const array = [1, 2, 3, 4, 5, 6];

// array.push(7)

// array.pop()
// array.unshift(7)
// array.splice(0, 0, 8)


// const array2 = array

// console.log(array2)



//console.log(array.concat(array2));

// const anyway = array
// console.log(anyway);

// const score = [];

// for (let i = '0'; i < 101; i++) {
//     score.push(i);
// }

// function isPass(score) {
//     // (let j = 0; j < score.length; i++);
//     if (score >= 60) {
//         return console.log(score >= 60, '합격');
//     } else {
//         return console.log(score < 60, '불합격');
//     }
// }


// const testscore = [71, 41, 23, 39, 87, 99]
// testscore.forEach(function (score, i) { // function(배열요소, 배열의 인덱스)
//     if (score >= 60) {
//         console.log(i + 1 + "번은", "합격");
//     }
//     else {
//         console.log(i + 1 + "번은", "불합격");
//     }
// })

// let numbers = [12, 7, 22, 35, 40, 55, 68, 91, 100];

// numbers.forEach(function (num, i) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// });

// let words = ["javascript", "html", "css", "react", "node"];

// words.forEach(function (word, i) {
//     let upperword = word.toUpperCase()
//     console.log(upperword);
// });


// const score = [51, 25, 65, 80, 97, 77]

// score.forEach(function (num, i) {
//     const average = score.reduce((acc, cur) => {
//         return acc + cur;
//     })
// })

// console.log(average);


/**
 * 전개 연산자 '...'
 배열 생성 후 ...+ 배열이름 시 배열이 그대로 복사됨
 생성된 배열 뒤에 추가 항목을 덧붙이기도 가능
 ex)
const $array = [1, 2, 3, 4, 5, 6];
const $array2 = [...$array, 7, 8, 9];

console.log($array);
console.log($array2); 
 */


// const checkNumber = (num) => {
//     if (num % 2 === 0) {
//         console.log(`${num}은 짝수`)
//     } else if (num % 2 === 1) {
//         console.log(`${num}은 홀수`)
//     }
//     };

// checkNumber(-4);

// function add(a, b) {return a + b;}
// console.log(add(1, 2));
// const add = ((매개변수) => { })
// const add = ((a, b) => {
//     console.log(a + b);
// });
// add(1, 2);

// function greet(name) {
//     return "안녕하세요, " + name + "님!";
// }

// const greet = (name) => {
//     return (`${name} 입니다. 잘부탁드립니다.`);

// };

// console.log(greet('찬'));

// function square(n) {
//     return n * n;
// }

const square = (n) => {
    return n * n;
};

console.log(square(2));