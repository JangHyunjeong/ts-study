(function () {
    // 함수 타입 지정하는 법
    // 함수(파라미터: 파라미터타입):리턴타입 {}
    // 타입 지정 안하면, any 설정됨
    function 함수(x) {
        return x * 2;
    }
    함수(2);
    // 함수에서만 void 타입 활용가능
    // void : 실수로 return 하는걸 막아줌.
    // return 하기 싫을 때 쓰면 됨
    function 함수2(x) {
        1 + 1;
    }
    함수2(2);
    // 자스와 다른점: 타입 지정된 파라미터는 필수임
    // 파라미터가 옵션일 경우엔 ?:타입
    // (중요!!) 변수?:number === 변수:number|nudefined
    function 함수3(x) {
        1 + 1;
    }
    함수3();
    function 함수4(x) {
        // if(x의 타입이 숫자면){
        //console.log(x + 3); // x는 number | undefined union type이라 연산 불가. if 문 사용해서 narrowing해줘야함
        // }
    }
    함수4(3);
})();
