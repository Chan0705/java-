// api 호출 함수

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // 응답을 json으로 변환
    .then(json => console.log('data', json)) // 변환된 데이터 출력
    .catch((error) => {
        console.log(error)
    });
// > 에러 발생 시, 에러를 확인하기 위한 문구 = .catch((error) => {});

// try / catch 문
// 위 .then 함수를 좀 더 깔끔하게 표현.
// 실행 출력은 동일하게 됨

const fetchData = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1',
        );
        const data = await response.json();

        console.log('data', data);
    } catch (error) {
        console.log('error', error);
    }
};

fetchData();


// rest api
// post put get delet
// get 전체 게시물 가져오기/특정 ID 게시물 가져오기
// post 게시물 생성
// put 게시물 수정
// rest api의 기본 틀은 정형화되어있음.
// jwt 개념