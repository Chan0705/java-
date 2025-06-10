const person = {
    name: '송태섭',
    age: 18,
    job: '학생',
    talk: (sentence) => {
        console.log(sentence);
    },
    hobbies: {
        hobby1: '농구',
        hobby2: 'Game',
    },
};

console.log(`hi ${person.name}`);
// '가 아닌 `