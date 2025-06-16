const parentEl = document.getElementById('parent');
const childEl = document.getElementById('child');
const parentCountEl = document.getElementById('parentCount');
const childtCountEl = document.getElementById('childCount');

let parentCount = 0;
let childCount = 0;

parentEl.addEventListener("click", () => {
    parentCount -= 1;
    parentCountEl.textContent = parentCount;
})

childEl.addEventListener("click", (e) => {
    e.stopPropagation()
    childCount += 1;
    childtCountEl.textContent = childCount;
})

// 이벤트 버블링 : a가 작동할때 b에 영향이 가는 현상
// e.stopPropagation() 추가 (e는 임시)