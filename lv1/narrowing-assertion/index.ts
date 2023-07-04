(function () {
  // function 함수(x?: number) {
  //   // if(x의 타입이 숫자면){
  //   if (typeof x === "number") {
  //     console.log(x + 3); // x는 number | undefined union type이라 연산 불가. if 문 사용해서 narrowing해줘야함
  //   }
  // }
  // 함수(3);

  // function 함수2(x: number | string) {
  //   let array: number[] = [];
  //   if (typeof x === "number") {
  //     array[0] = x;
  //   }

  //   // 속성명 in 오브젝트자료
  //   // 인스턴스 instanceof 부모
  // }

  // 아니면 assertion문법
  // function 함수3(x: number | string) {
  //   let array: number[] = [];
  //   array[0] = x as number; // x를 number로 덮어써주세요
  //   // 용도 1. Narrowing 할때 씀.
  //   // 용도 2.무슨 타입이 들어올지 100% 확실할 때 쓰셈 -> 안그럼 빠따
  //   // 왜냐면 as 쓰면 타입 버그를 걸러주지 않음.
  //   // 평소에는 if로 타입 체크하다가.. 남이 짠 코드 수정할때.. 왜 타입에러나는지 모르겠을때..비상용.. 디버깅용..
  //   // 예전 as 문법
  //   // <number>이름
  // }

  // 이딴식으로 쓰면 안딤
  // let 이름: string = "Kim";
  // 이름 as number;

  // ==== 숫자 1.숫자여러개를 array 자료에 저장해놨는데
  // 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
  // 이걸 클리닝해주는 함수가 필요합니다.
  // 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
  // [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
  function func1(arr: (number | string)[]) {
    let newArr: number[] = [];
    arr.forEach((item) => {
      if (typeof item === "string") {
        newArr.push(parseFloat(item));
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  }
  console.log(func1([1, "2", 3]));

  // 숙제2.
  // 철수쌤같은 선생님 object 자료를 집어넣으면
  // 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
  // 그리고 타입지정도 엄격하게 해보도록 합시다.
  let 철수쌤 = { subject: "math" };
  let 영희쌤 = { subject: ["science", "english"] };
  let 민수쌤 = { subject: ["science", "art", "korean"] };

  function func2(obj: { subject: string | string[] }): string {
    if (typeof obj.subject === "string") {
      return obj.subject;
    } else {
      return obj.subject[obj.subject.length - 1];
    }
  }
  console.log(func2(철수쌤));
  console.log(func2(영희쌤));
  console.log(func2(민수쌤));
})();
