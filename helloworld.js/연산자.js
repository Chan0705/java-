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
// 둘 중 하나라도 f면 f
console.log('a === b || a < c', a === b || a < c);
// 둘 중 하나라도 t면 t

//부정 연산자
console.log(!false);
console.log('a !==b', a !== b);
console.log('a !=b', a != b);


// 삼항 연산자
const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다';
console.log(result)
// :는 or와 같은 의미