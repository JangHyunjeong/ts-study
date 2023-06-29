(function () {
  let 이름2: string = "Kim";
  let 나이: number = 50;
  let 결혼했니: boolean = false;

  let 회원들: string[] = ["kim", "park"]; // 문자만 담긴 arrary만 가능

  let 회원정보: { name: string; age: number } = { name: "kim", age: 60 };

  // 타입 지정은 원래 자동으로 됩니다. (변수에 커서 올리면 알려줌)
  let 회원들2 = "park";
  // 회원들2 = 1; >> string으로 자동설정.

  let 나: { name: string; age: number; local: string } = {
    name: "장현정",
    age: 28,
    local: "서울",
  };

  let favorite: { song: string; singer: string } = {
    song: "gradation",
    singer: "10cm",
  };

  let project: { member: string[]; days: number; started: boolean } = {
    member: ["kim", "park"],
    days: 30,
    started: true,
  };
})();
