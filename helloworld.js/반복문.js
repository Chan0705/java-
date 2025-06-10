//for 반복문
for (let i = 0; i < 20; i++) {
    console.log('지금 현재 i 값은', i, '입니다.')
}
// let i = 0 > 선언문 - 초기값 세팅. i < 10 >> 10회까지 반복하겠다.
// i++는 증가 연산자로, 변수 i의 값을 1 증가시키는 역할

// while 반복문
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
