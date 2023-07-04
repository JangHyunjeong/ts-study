(function () {
  let 이름: string[] = ["Kim", "park"];
  let person: { name?: string } = { name: "Kim" }; // ? 치면 해당 속성은 옵션 처리됨
  let 값: string | number = 1234; // string 또는 number 이 옴

  // 타입 변수에 담아 쓸 수 있음
  type Type = string | number; //타입 정의시, 맨앞글자 대문자로 정의함 -> 일반 변수랑 차이를 두려고
  let 값2: Type = 123;

  // 함수 타입 지정
  // 파라미터, 리턴값에 지정가능
  function 함수(x: number): number {
    return x * 2;
  }
  함수(12);

  // array에 쓸 수 있는 tuple 타입
  type Member = [number, boolean]; // 첫번째 자료는 number, 두번째 자료는 boolean
  let john: Member = [10, true];

  // object에 타입 지정해야할 속성이 너무 많으면
  type Member2 = {
    // name: string;
    [key: string]: string | number;
  };
  let kim: Member2 = { name: "siwon", age: 123 };

  // class 타입 지정 가능
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
})();
