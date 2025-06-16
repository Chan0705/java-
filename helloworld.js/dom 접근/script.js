// html dom 요소 가져오기
// dom = DOM은 Document Object Model의 줄임말로, 웹 페이지의 구조화된 표현을 의미.
//  쉽게 말해서, HTML 문서를 JavaScript로 다룰 수 있도록 만든 트리 구조라고 생각.

const btn = document.getElementById('eventb');
// const countDisplay = document.getElementById('count');
const container = document.getElementById('container');


let count = 0;

//버튼 이벤트

// btn.addEventListener("click", function (event) {
//     console.log(event)
//     count += 1;
//     countDisplay.textContent = count;
// });

btn.addEventListener("click", function () {
    count += 1;
    const newDiv = document.createElement('div')
    newDiv.className = 'box';
    newDiv.textContent = `${count}번째로 생성된 div`
    container.appendChild(newDiv);
});


// getElementById()는 JavaScript에서 특정 ID를 가진 HTML 요소를 선택하는 방법입니다.
// 이 메서드는 ID가 고유해야 한다는 점이 중요하며, 문서에서 해당 ID를 가진 첫 번째 요소를 반환합니다.
// addEventListener()는 JavaScript에서 특정 이벤트를 요소에 연결하는 메서드입니다.
// 이 메서드를 사용하면 HTML 요소가 클릭, 입력, 마우스 움직임 등의 이벤트에 반응할 수 있습니다.
// textcontent > html파일에 있는 텍스트를 ~~ 로 변경하겠다.(웹페이지에서 변경반영됨)
// `${count}번째로 생성된 div` > '가 아닌 `