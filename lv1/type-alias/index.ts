(function () {
  type Animal = string | number | undefined;
  let 동물: Animal = 13;

  // 1. 타입변수 만들때 대문자로 시작하기
  type AnimalType = { name: string; age: number };
  let 동물2: AnimalType = { name: "jenny", age: 20 };

  // 2. const 원래 수정을 못하는 변수 선언문이잖아?
  // ex) const 출생지역 = 'seoul'; -> 못바꿈.
  // 근데 const안의 object자료는 바꿀수 있음
  const 출생지역 = { region: "seoul" };
  출생지역.region = "busan";

  // 2-1. ts에서는 저걸 막을 수 있다.
  type Girlfriend = {
    readonly name?: string;
  };
  const 여친: Girlfriend = { name: "김태희" };
  // 여친.name = "윤아"; -> readonly넣어서 에러뜸
  // 타입스크립트 에러는 에디터&터미널 에리임.
  // object속성 안에서도 ? 사용가능 - |undefined

  // type 변수 union type으로 합치기 가능
  type Name = string;
  type Age = number;
  type Person = Name | Age;

  // &연산자로 object합치기
  // extend 한다!
  type PositionX = { x: number };
  type PositionY = { y: number };
  type NewType = PositionX & PositionY;

  let position: NewType = { x: 10, y: 20 };

  // 같은 이름의 type 변수 재정의 불가능
})();
