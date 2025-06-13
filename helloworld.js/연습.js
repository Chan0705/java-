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


const score = [51, 25, 65, 80, 97, 77]

score.forEach(function (num, i) {
    const average = score.reduce((acc, cur) => {
        return acc + cur;
    })
})

console.log(average);