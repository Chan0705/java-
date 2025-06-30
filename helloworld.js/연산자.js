const a = 1;
const b = '1';
const c = 2;
const d = 1;

//비교 연산자
console.log('a == b', a == b); // true
console.log('a === b', a == b); // false
console.log('a < c', a < c); // true
console.log('a > c', a < c); // false
console.log('a <= d', a <= d); // true
console.log('a >= d', a >= d); // false


//증감 연산자
// ++ > +1 씩 증가, -- > -1 씩 감소
// ++i(전위) i 변수 이전에 ++(+1) 먼저 계산
// i++(후위) i 변수까지 계산된 후 뒤에 배열되는 계산식에서 ++(+1) 증가
let e = 1;
e++;
console.log('e++', e++);
e--;
console.log('e--', e);

//논리 연산자
console.log('a === b && a < c', a === b && a < c);
// 둘 중 하나라도 f면 false
console.log('a === b || a < c', a === b || a < c);
// 둘 중 하나라도 t면 true

//부정 연산자
console.log(!false);
console.log('a !==b', a !== b);
console.log('a !=b', a != b);
// 함수 앞에서 !를 붙여서도 사용가능함
// console.log(!a); = console.log(a !== 'a');

// 나머지 연산자 (%)
console.log(5 % 3);
// 두 수를 나눈 뒤의 나머지를 반환합니다.
// 출력 값이 짝수인지 홀수인지 확인하기 위해 자주 사용
// ex) 5 % 3 은 홀수이다 > 5/3= 2가남음 > false임.

