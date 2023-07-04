(function () {
  // ==== 1. DOM Element 가져와서 수정하려면?
  //let 제목 = document.querySelector("#title");
  // selector로 찾은 요소는 null일수도 있기 때문에 union type임
  // 그래서 narrowing하여 타입을 확정 시켜줘야함
  // 방법1. element !== null
  // if (제목 !== null) {
  //   제목.innerHTML = "반가워요";
  // }
  // 빙법2. instanceof --> 제일 많이 사용할것임!!
  // 왼쪽이 오른쪽의 자식이냐?
  // if (제목 instanceof Element) {
  //   제목.innerHTML = "반가워요";
  // }
  // 방법3. as로 사기치기
  // let 제목 = document.querySelector("#title") as Element;
  // 제목.innerHTML = "반가워요";
  // 방법4. 오브젝트에 붙이는 ?. (optional cahning)
  // 왼쪽의 object가 innerHTML이 있으면 출력 / 없으면 undefined
  // let 제목 = document.querySelector("#title");
  // if (제목?.innerHTML) {
  //   제목.innerHTML = "반가워요";
  // }
  // 방법5. tsconfing.json에서 nullcheck 안하기

  // ==== 2. a태그의 href속성 내용을 바꿔보자
  // let 링크 = document.querySelector(".link");
  // if (링크 instanceof Element) {
  //   링크.href = "https://kakao.com";
  // }  // a 태그는 그냥 element로 걸러지지 않음
  // if (링크 instanceof HTMLAnchorElement) {
  //   링크.href = "https://kakao.com";
  // }

  // ==== 3. addEventListener
  let 버튼 = document.querySelector("#button");
  // ?.addEventListener : 왼쪽에 addEventListener 가능하면 해주고, 아니면 undefined
  버튼?.addEventListener("click", function () {});
})();
