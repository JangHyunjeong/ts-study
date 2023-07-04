(function () {
  // ==== 1. 함수타입 만들기
  // 모든 함수 타입은 화살표 함수 모양으로!
  // type 함수타입 = () => {};
  // 이 함수 타입은 무조건 string타입의 파라미터, number 타입 반환
  // type 함수타입 = (a: string) => number;

  // // 함수 type alias 부착하려면 함수표현식 써야됨(함수선언식 x)
  // let 함수: 함수타입 = function (a) {
  //   return 10;
  // };

  // ==== 2. object 안에 함수 타입지정
  // type Member = {
  //   name: string;
  //   plusOne: (x: number) => number;
  //   changeName: () => void;
  // };

  // ==== 2.(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.
  // - cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
  // - removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다.
  // - 함수에 타입지정시 type alias를 꼭 써보도록 합시다.

  type CutZeroType = (str: string) => string;
  const cutZero: CutZeroType = (str) => {
    if (str[0] === "0") {
      str = str.slice(1, str.length) as string;
      return str;
    } else {
      return str;
    }
  };
  console.log(cutZero("0뭐가문젠데"));

  type RemoveDashType = (str: string) => number;
  const removeDash: RemoveDashType = (str) => {
    let result = str.replace(/-/g, "");
    return parseInt(result);
  };
  function 만들함수(str: string, func1: CutZeroType, func2: RemoveDashType) {
    let result1 = func1(str);
    let result2 = func2(result1);
    return result2;
  }
  console.log(만들함수("010-1111-2222", cutZero, removeDash));
})();
