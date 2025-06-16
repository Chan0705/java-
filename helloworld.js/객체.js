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
// console.log person3 = (...person) > ... 붙이면 깊복
const deepCopy = (person) => {
    const result = {};  // result를 상수로 선언
    for (let key in person) { // 객체를 반복문 실행
        if (typeof person[key] === 'object') { // 객체 안 KEY값의 타입이 object인지 확인
            console.log('깊은 복사중', key, '값은', person[key]);
            result[key] = deepCopy(person[key]); // 재귀함수(같은 함수를 중복 실행) 이용
        } else {
            result[key] = person[key]
        }
    }
    return result;
};

const person3 = deepCopy(person)
console.log