(function () {
    // ==== (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
    // => 나중에 선언한 속성으로 지정됨.
    // type Info = { name: string; age: number };
    // type Info2 = { name: number; weight: number };
    // let person: Info & Info2 = {
    //   name: "jj",
    //   age: 10,
    //   weight: 100,
    // };
    // console.log(person);
    // ==== (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다.
    // 1. 이 타입은 object 자료형이어야합니다.
    // 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
    // 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
    // 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
    //type alias로 만들어보셈
    var test1 = {
        size: 123,
        position: [100, 200],
    };
    var person = { name: "kim", phone: 123, email: "abc@naver.com" };
    var younger = {
        name: "kim",
        phone: 123,
        email: "abc@naver.com",
        teen: false,
    };
})();
