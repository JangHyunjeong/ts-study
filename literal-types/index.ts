(function () {
  // 더 엄격하게 타입 지정하기
  // 타입이 아니라, 특정 값을 타입으로 지정할 수도 있다.
  let 이름: 123;
  이름 = 123;
  // 이름 = 1; // 안됨

  let 접니다: "솔로" | "수영짱";
  접니다 = "수영짱";
  // 접니다 = "퀸카"; // 안됨
  // 자동완성도 개꿀

  function 함수(a: "현정짱"): 1 | 0 {
    console.log(a);
    return 1;
  }
  함수("현정짱");

  // 문제1.
  // 1. 가위, 바위, 보 중 하나만 입력가능
  // 2. 가위, 바위, 보 만 들어올 수 있는 array리턴
  type RSPType = "가위" | "바위" | "보";

  function 가위바위보(a: RSPType): RSPType[] {
    let 리턴값: RSPType[] = [a];
    return 리턴값;
  }
  console.log(가위바위보("가위"));

  // ==== const 변수 한계
  // literal type은 const 변수와 유사하게 사용가능
  var 자료 = {
    name: "kim",
  };
  function 내함수(a: "kim") {
    // a에는 kim이라는 타입만 들어올수있습니다!  (kim이라는 자료가 들어올수 있습니다 X)
    console.log(a);
  }
  //내함수(자료.name); // 현재 자료.name의 타입은 string

  // ==== 해결책 1. 오브젝트 만들때 타입 확실히 지정
  var 자료2: { name: "kim" } = {
    name: "kim",
  };
  function 내함수2(a: "kim") {
    console.log(a);
  }
  내함수2(자료2.name);

  // ==== 해결책 2. as 문법 -> 근데 비추
  var 자료3 = {
    name: "kim",
  };
  function 내함수3(a: "kim") {
    console.log(a);
  }
  내함수2(자료3.name as "kim");

  // ==== 해결책 2. 오브젝트 뒤에 as const
  // 이 object는 literal type 지정으로 해주셈
  // 효과 1. object의 value값을 그대로 타입으로 지정해줌
  // 효과 2. object 속성 모두 readonly 처리됨
  var 자료4 = {
    name: "kim",
  } as const;
  function 내함수4(a: "kim") {
    console.log(a);
  }
  내함수2(자료4.name);
  // 자료4.name = "lee"; // 에러남. readonly니까
  // object자료를 완전히 잠그려면 써보기
})();
