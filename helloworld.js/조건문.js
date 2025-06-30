const a = 1;
const b = 2;
const c = 1;

if (a === b) {
    console.log('첫 번째 조건이 충족');
} else if (a !== c) {
    console.log('두 번째 조건이 충족');
} else if (b > c) {
    console.log('세 번째 조건이 충족');
} else if (c === a) {
    console.log('네 번째 조건이 충족');
} else {
    console.log('이 외의 모든 조건')
}
// 조건문은 위에서부터 내려오면서 진행되며 조건에 충족된 조건 이후로의 조건들은 실행되지 않음
// if 이후 추가 조건을 설정 시 esle if를 사용
// if문 이후 나머지 조건일 경우 else를 사용.

//switch 문
// switch(비교하고 싶은 값){}
switch (a) {
    case b:
        console.log('a는 b와 다릅니다');
        break;
    case c:
        console.log('a는 c와 같습니다');
        break;
    default:
        console.log('a는 b나 c와 같지 않습니다')
}
// break가 없으면 그 아래 코드를 계속해서 실행


// 삼항 연산자
const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다'; // : 기준으로 왼쪽이 참인 값, 오른쪽이 거짓인 값
console.log(result)

// let result = '';
// if (a === b) {
//     result = 'a와 b는 동일';
// } else {
//     result = 'a와 b는 다름'
// }
// 위 조건문과 삼항연산자는 동일
// :는 or와 같은 의미