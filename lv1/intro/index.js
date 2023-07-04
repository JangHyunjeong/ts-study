(function () {
    var 이름 = ["Kim", "park"];
    var person = { name: "Kim" }; // ? 치면 해당 속성은 옵션 처리됨
    var 값 = 1234; // string 또는 number 이 옴
    var 값2 = 123;
    // 함수 타입 지정
    // 파라미터, 리턴값에 지정가능
    function 함수(x) {
        return x * 2;
    }
    함수(12);
    var john = [10, true];
    var kim = { name: "siwon", age: 123 };
    // class 타입 지정 가능
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
})();
