// 강제로 N초 뒤에 실행하게 만드는 함수가 존재(실제 사용하는 경우는 드뭄)
/* 비동기(asynchronous)란 작업이 완료될 때까지 기다리지 않고 다음 작업을 수행하는 방식을 의미
// 예시)
// console.log('1')
// setTimeout(() =>{
// consolo.log('2');
// }, 2000)
// console.log('3');
// 1 실행 후 2000ms(2초) 후 2가 출력됨.
// 3까지 실행할 경우 1 -> 3 -> 2 순으로 출력


// async / await 함수
const ws = (ms) => {
    new Promise((resolve) => setTimeout(resolve, ms));
};
const run = async () => {
    console.log('1');
    await ws(1000);
    console.log('2');
    await ws(1000);
    console.log('3');
    await ws(1000);
};

run();

= 같은 내용

const ws = (msg, ms) => {
    return new Promise((resolve) =>
        setTimeout(() =>{
        console.log(msg);
        resolve();
        },ms),
        );
};

// promise > 동기비동기 한번에 처리하는 문법

const run = async () => {
    await ws('1', 1000); // 1초 뒤에 실행
    await ws('1', 2000); // 2초 뒤에 실행
    await ws('1', 1000); // 1초 뒤에 실행
};

run();

await이 존재하면 선작업 종료 전까지는 밑에 함수가 실행안됨
await이 없으면 1  3 2 순으로 실행
*/