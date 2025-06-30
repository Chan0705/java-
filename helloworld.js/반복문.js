//for 반복문
for (let i = 0; i < 20; i++) {
    console.log('지금 현재 i 값은', i, '입니다.')
}
// let i = 0 > 선언문 - 초기값 세팅. 'i < 10' >> 10회까지 반복하겠다, 'i++' > 사칙연산
// i++는 증가 연산자로, 변수 i의 값을 1 증가시키는 역할
// for (초기문;조건문;증감문) {
//     const element = array[index];
    
// }

// while 반복문
// j가 0일 때, 아래의 조건을 계속 반복함.(처음에 조건을 설정)
let j = 0;
while (j < 10) {
    console.log('지금 현재 j 값은', j, '입니다.');
    j++;
}

// do while 반복문
let k = 0;
do {
    console.log('지금 현재 k 값은', k, '입니다');
    k++;
} while (k < 10);
//조건(while) 실행 전, do에 해당하는 부분을 무조건 1회 실행


const person = {
    name: '송태섭',
    age: 17,
    job: '학생',
};

for (key in person) {
    console.log(key);
    console.log(person[key]);
}
// KEY 값 : 고정값 VALUE값: KEY에 해당하는 정보값,
// 'KEY in person' : person이라는 객체 안에 key값에 해당하는 value값을 불러온다

const persons = {

    강백호: {
        age: 16,
        job: '학생',
        position: 'PF',
        sex: '남성'
    },
    서태웅: {
        age: 16,
        job: '학생',
        position: 'SF',
        sex: '남성'
    },
    송태섭: {
        age: 17,
        job: '학생',
        position: 'PG',
        sex: '남성'
    },
    김한나: {
        age: 17,
        job: '학생',
        position: '매니저',
        sex: '여성'
    }
};

for (i in persons) {
    for (j in persons[i]) {
        for (k in persons[i]) {
            if (j === "sex" && k === "age" && persons[i][j] === '여성' && persons[i][k] < 18) {
                console.log('성별이 여자인 17살인 사람은', i);
            }
        }
    }
}
// i = 객체 name. [] > persons 안에서 지정하는 값
// for(i in persons) > persons라는 객체 안에서 i를 찾는다
// for(i in persons[]) > persons안에서 [i]라는 객체를 찾는다