(function () {
  let 버튼 = document.querySelector("#button");
  let 이미지 = document.querySelector("#image");
  버튼?.addEventListener("click", function () {
    if (이미지 instanceof HTMLImageElement) {
      이미지.src = "./img/new.jpg";
    }
  });

  let links = document.querySelectorAll(".naver");
  links.forEach(function (link) {
    if (link instanceof HTMLAnchorElement) {
      link.href = "https://kakao.com";
    }
  });
})();
