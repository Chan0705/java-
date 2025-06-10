const person = {
    name: '송태섭',
    age: 18,
    job: '학생',
    city: '하코네',
    talk: (sentence) => {
        console.log(sentence);
        //return >> return 뒤로 오는 함수는 실행이 되지 않음.
    },
    hobbies: {
        hobby1: '농구',
        hobby2: 'Game',
    },
};

//console.log(`hi ${person.name}`);
// '가 아닌 `


// 옅은 복사
const person2 = { ...person }
person2.name = "정대만"
person2.age = "19"
console.log('첫번째 얕은 복사', person)
console.log(person2.name);

person2.hobbies.hobby2 = '바이크'
console.log('두번째 얕은 복사', person2)


// 깊은 복사
const deepCopy = (origin) => {
    const result = {};
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key]);
        } else {
            result[key] = origin[key]
        }
    }
    return result;
};

const person3 = deepCopy(person);
//person3.city = "가마쿠라";
console.log('깊은 복사', person3)