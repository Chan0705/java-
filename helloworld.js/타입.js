const a = 1;
console.log('a 타입', typeof a);

// 숫자 > 문자로 형 변환
console.log(typeof a.toString())
console.log(typeof String())

const b = '1';
console.log('b 타입', typeof b);

// 문자 > 숫자로 형 변환
console.log(typeof parseInt(b))
console.log(typeof Number(b))

const c = 2n; // 2^53 - 1 보다 큰 값

const d = true;

const e = null;

const f = undefined;

const g = NaN; // Not a Number

const h = Infinity;

const i = {};//객체 = object
console.log("i 타입", typeof i);