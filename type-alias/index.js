(function () {
    var 동물 = 13;
    var 동물2 = { name: "jenny", age: 20 };
    // 2. const 원래 수정을 못하는 변수 선언문이잖아?
    // ex) const 출생지역 = 'seoul'; -> 못바꿈.
    // 근데 const안의 object자료는 바꿀수 있음
    var 출생지역 = { region: "seoul" };
    출생지역.region = "busan";
    var 여친 = { name: "김태희" };
    var position = { x: 10, y: 20 };
    // 같은 이름의 type 변수 재정의 불가능
})();
