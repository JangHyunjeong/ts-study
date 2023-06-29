(function () {
    function 함수(x) {
        // if(x의 타입이 숫자면){
        if (typeof x === "number") {
            console.log(x + 3); // x는 number | undefined union type이라 연산 불가. if 문 사용해서 narrowing해줘야함
        }
    }
    함수(3);
    function 함수2(x) {
        var array = [];
        if (typeof x === "number") {
            array[0] = x;
        }
        // 속성명 in 오브젝트자료
        // 인스턴스 instanceof 부모
    }
    // 아니면 assertion문법
    function 함수3(x) {
        var array = [];
        array[0] = x; // x를 number로 덮어써주세요
        // 용도 1. Narrowing 할때 씀.
        // 용도 2.무슨 타입이 들어올지 100% 확실할 때 쓰셈 -> 안그럼 빠따
        // 왜냐면 as 쓰면 타입 버그를 걸러주지 않음.
        // 평소에는 if로 타입 체크하다가.. 남이 짠 코드 수정할때.. 왜 타입에러나는지 모르겠을때..비상용.. 디버깅용..
        // 예전 as 문법
        // <number>이름
    }
    // 이딴식으로 쓰면 안딤
    // let 이름: string = "Kim";
    // 이름 as number;
})();
