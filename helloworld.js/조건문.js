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
}
// 조건문은 위에서부터 내려오면서 진행

//switch 문
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