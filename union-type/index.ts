(function () {
  // 문자 or 숫자 들어올 수 있는 변수는 어떻게 만듦? -> union type
  let 회원: number | string = 123;
  회원 = "hi";

  let 회원들: (number | string)[] = [1, "2", 3];
  let 오브젝트: { a: string | number } = { a: 123 };

  let 이름: any; // 타입 실드 해체 문법, 일반 js변수로 만들고 싶으면 쓰셈
  이름 = 123;
  이름 = [];

  let 이름2: unknown; // any와 비슷한데 더 안전하다
  이름2 = 132;

  // let 변수1: string = 이름; any로 쓰면 string이 아닌 숫자도 대입가능하게 돔
  // let 변수2: string = 이름2; unknown은 사리분별함

  // 이름 - 1;
  // 이름2 - 1; // unknown : type이 다르면 연산도 불가. 숫자 대입해도 얘 타입은 unknown이어서 연산 불가

  // 타입엄격하게 지켜야함!

  let 나이: string | number;
  // 나이 + 1;
  // +1은 string, number 타입 일 때 가능함. 근데 string|number 의 number 타입은 연산 안됨

  // 숙제 1. 각 데이터 타입 지정
  let user: string = "kim";
  let age: undefined | number = undefined;
  let married: boolean = false;
  let 철수: (string | undefined | number | boolean)[] = [user, age, married];

  // 숙재2. 학교라는 변수 타입 지정
  let 학교: {
    score: (number | boolean)[];
    teacher: string;
    friend: string | string[];
  } = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
  };
  학교.score[4] = false;
  학교.friend = ["Lee", 학교.teacher];
})();
