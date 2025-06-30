// 배열(Array)은 같은 종류의 데이터를 순차적으로 저장하는 자료 구조입니다.
// 프로그래밍에서 배열을 사용하면 여러 개의 값을 하나의 변수에 저장, 인덱스를 통해 접근
// 배열의 처음 시작값은 1이 아닌 0 부터 카운트

const array = [1, 2, 3, 4, 5];

const humansArray = ["강백호", "송태섭", "서태웅", "정대만", "채치수"];

//const objectArray = [
// {
//     name: '강백호',
//     },
// {
//     name: '송태섭',
//     },
// {
//     name: '서태웅',
//     },
// ];

//console.log(humansArray[0]);

// push: 마지막 배열에 추가
// ex) const array = [1, 2, 3, 4, 5];

// array.push(6);
// > 이럴 경우 array배열에 6이 추가됨

// pop: 마지막 배열 삭제; array.pop()

// unshift : 첫번째 배열에 추가
// shift : 첫번째 배열 삭제

// splice: 배열 원하는 위치에 추가 및 삭제 가능
// splice(startIndex, deleteCount, item1, item2, ...)
//     - startIndex: 변경을 시작할 배열의 인덱스
//         - deleteCount: 제거할 요소의 개수(0이면 아무것도 제거하지 않음)
//             - item1, item2, ...: 삽입할 새로운 요소(선택 사항)
// ex) array.splice(2, 0, 3)> 인덱스 2위치에 0개를 삭제하고 3을 추가한다.


// slice : 배열의 일부분을 복사
// const slice = array.slice(a, b); > a = 복사 시작 인덱스, b = b 인덱스 직전까지 복사
//ex) const slice = array.slice(1, 3);
// console.log(slice);


// concat: 배열 합치기 > array와 array2와 합치기
// 'console.log([...array, ...array2])'랑 'array.concat(array2)'는 동일
// spread 연산자 '...'는 ...배열을 전부 부른다는 뜻


// indexof: 배열 위치 찾기
// console.log(array.indexOf(a)); / a배열에 위치한 값 검색
// console.log(array.indexOf(100)); > -1로 나옴, >>> 위치에 없다는 뜻

// includes: 배열 안에 값이 있는지 검색 및 확인
// console.log(array.includes(6));
// 배열안에 변수값이 있으면 'true', 없으면 'false'

// map: 조건에 따라 새로운 배열을 만들어줌
// const newArray = array.map((e) => e * 2); >> 기존 array 배열에서 * 2를 해서 새로 생성
// console.log(newArray);

// // filter: 조건에 맞는 값만 추출해서 새로운 배열로 생성
// const filterArray = array.filter((e) => e % 2 === 1);
//  >> 기존 array 배열에서 나누기 2했을 때 1이 남는 값들만 출력
// console.log(filterArray);
// 조건문 (a,b)에서 a에 들어가는 것은 배열에서 데이터값, b는 인덱스값 고정


// find: 조건에 맞는 '첫번째 값'을 반환
// const findArray = array.find((e) => e % 2 === 0);
// >> 기존 array 배열에서 나누기 2했을 때 0이 되는 값 중 '첫번째 값'만 출력
// console.log(findArray);

// reduce : 해당 array의 누적 계산값
// reduce((누적값, 현재값) => { })
// const totalArray = array.reduce((acc, cur) => {
//     return acc + cur
// });
// console.log(totalArray);

// sort: 배열 정렬(알파벳도 정렬됨, 한글은 별도 함수 필요)
// const nonSortArray = [3, 2, 5, 1, 4]; // 정렬 안 된 array
// const SortArray = nonSortArray.sort(); // 정렬 안 된 array를 정렬
// console.log(SortArray); // 출력값
// 10, 200, 3, 4000, 는 앞 숫자만 따와서 정렬. 이걸 정렬하기 위해서는 아래와 같이 함
// const nonSortArray = [10, 200, 3, 4000];
// const realSortArray = nonSortArray.sort((a, b) => a - b);
// console.log(realSortArray);

// 중복제거 함수 SET
const li = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5]
const ii = new Set(li);

console.log(ii);

//배열의 길이를 출력
//console.log(array.length);

//배열 반복
// console.log();

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//value of array
// for (const data of array) {
//     console.log(data);
// }


//forEach - 배열의 각 요소에 대해 주어진 함수를 실행하는 반복 메서드. 
// 배열을 변경하지 않으며, 각 요소를 순차적으로 처리하는 데 사용
// humansArray.forEach((data, index) => {
//     console.log(data, index);
// });
//data, inedx >> .foreach로 찾으려는 배열에서 해당하는 항목 - index 순서를 출력하는 수식

//map
const New = array.map((data, index) => {
    console.log(data, index);
    return data * 2;
});
console.log(New);