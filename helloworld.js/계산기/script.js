const display = document.getElementById('display')
const buttons = document.querySelector('buttons') // 모든 버튼

let current = ''; // 현재값
let operator = ''; // 연산값
let prev = ''; // 이전값

buttons.forEach((btn) => {
    // 끌고온 모든 버튼 반복
    btn.addEventListener('click', () => {
        // 끌고온 버튼마다 클릭 이벤트 생성
        const value = btn.textcontent; // 버튼 개당의 text 값

        if (value === "c") {
            // 초기화 버튼 클릭시 작동
            current = ''; // 현재값 초기화
            prev = ''; // 이전값 초기화
            operator = ''; // 연산값 초기화
            display.value = ''; // input 값 초기화
        } else if (['+', '－', '×', '÷'].includes(value)) {
            // 연산버튼 클릭 시
            if (current === '') {
                // 현재 값이 없다면 반환 후 정지
                return;
            }

            operator = value; // 연산값 operator을 값에 추가
            prev = current; // 현재 값을 이전 값에 적용
            current = ''; // 현재 값은 빈 문자열로 적용

        } else if (value === '=') {
            // = 버튼을 눌렀을 때
            if (operator === '' || current === '' || prev === '') {
                // 현재값, 연산값, 이전값이 없을 때 반환 후 정지
                return;
            }
            // 같은 수식
            // if (!operator || !cureent || !prev){return;}

            const a = parseFloat(prev); // parseFloat = 문자열을 실수(부동소수점 숫자)로 변환, 이전값이 문자열
            const b = parseFloat(current); // 현재값이 문자열, 숫자로 변환
            let result = 0; // 계산 값의 초기화

            if (operator === '+') {
                result = a + b;
            } else if (operator === '-') {
                result = a - b;
            } else if (operator === 'x') {
                result = a * b;
            } else if (operator === '÷') {
                result = a / b;
            }

            display.value = result; // input 태그 안에 result 값 추가
            current = result.toString(); // result 값 문자열로 변환 후 현재값에 적용
            operator = ''; // 연산값 초기화
            prev = ''; // 이전값 초기화
        } else {
            current += value; // 문자열이므로 더했을때 문자열로 더해짐
            display.value = current; // input 태그 안에 현재 값을 적용
        }
    });
});

