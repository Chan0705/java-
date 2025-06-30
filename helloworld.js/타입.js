const a = 1;
console.log('a 타입', typeof a);

// 숫자 > 문자로 형 변환
console.log(typeof a.toString())
console.log(typeof String())

const b = '1';
console.log('b 타입', typeof b);

// 문자 > 숫자로 형 변환
console.log(typeof parseInt(b))  // parseInt는 타입을 변환시켜주는 JS 문법, parseFloat, palseNumber 등등
console.log(typeof Number(b))

const c = 2n; // 2^53 - 1 보다 큰 값, 'bigint'

//buleean , true or false만 출력함
const d = true;

// null = 값이 없음. JS에서는 0과 같음, false로 인식
const e = null;

// undefined = 값이 정의되지 않음
const f = undefined;

const g = NaN; // Not a Number

const h = Infinity;

const i = {};//객체 = object
console.log("i 타입", typeof i);

const j = [] // array > 배열
// 객체와 배열 둘다 Type은 object지만 객체는 {}, 배열은 [] 