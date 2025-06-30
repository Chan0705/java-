const a = 1;
const b = 10;
const c = 99;

// 기본 함수 선언식
function functionName(x, y) {
    return x + y;
}
// function 함수의이름(매개변수) {
//     return '반환값'
// }

// return을 실행할경우 함수를 종료한다
// return을 실행할경우 호출자에게 값을 반환한다.


// let result = functionName(a, b)
// = console.log(result);

// 화살표 함수
const arrowFunction = (x, y) => {
    return x * y;
};

console.log(arrowFunction(c, b));

// 콜백 함수
