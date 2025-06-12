// 반복문을 이용해서 0부터 100까지 배열 하나와 101부터 200까지 배열을 만든 후
// 두 개의 배열을 합친 다음 그 합친 배열에서 짝수만 있는 배열을 생성
// 그리고 그 배열을 역순 정렬 후, 배열 안에 모든 수를 더한 값을 출력
// 고차 함수
// A: 10,100


// const arr1 = [];
// const arr2 = [];

// for (let i = 0; i <= 100; i++) {
//     arr1.push(i)
// }

// for (let j = 101; j <= 200; j++) {
//     arr2.push(j)
// }


// const nonSortArray = [...arr1, ...arr2];
// // = arr1.concat(arr2);, 배열 합침

// const SortArray = nonSortArray.sort((a, b) => b - a);
// // 역순 정렬

// const filterArray = SortArray.filter((e) => e % 2 === 0);
// // 짝수만 필터

// const totalArray = filterArray.reduce((acc, cur) => {
//     return acc + cur
// });
// console.log(totalArray);
// // 배열 합산

//한번에 하는법
// const oneCombo = arr1
//     .concat(arr2)
//     .sort((a, b) => b - a);
//     .filter((e) => e % 2 === 0);
//     .reduce((acc, cur) => {
//         return acc + cur
//     });

//----------------------------------------------
// score 배열에서 60점 이상인 점수만 추출해서 새 배열로 생성, 생성된 새 배열의 평균 점수 추출(filter랑 map 사용 없이, 반복문으로)
// // * 예시수식
// score.forEach((score) => {
//     if (score >= 60) {
//         newsocore.push(score);
//     });

// const totalsocre = newScore = newScore.reduce((acc, cur) => {
//     rerturn acc + cur;
// });
// const average = totalsocre / newScore.length;

// console.log(average);





const score = [85, 90, 50, 58, 92, 82, 61, 45, 70, 74];
const newscore = [];

for (let i = 0; i < score.length; i++) {
    if (score[i] >= 60) {
        newscore.push(score[i])
    }
}
