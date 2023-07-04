(function () {
    var 이름2 = "Kim";
    var 나이 = 50;
    var 결혼했니 = false;
    var 회원들 = ["kim", "park"]; // 문자만 담긴 arrary만 가능
    var 회원정보 = { name: "kim", age: 60 };
    // 타입 지정은 원래 자동으로 됩니다. (변수에 커서 올리면 알려줌)
    var 회원들2 = "park";
    // 회원들2 = 1; >> string으로 자동설정.
    var 나 = {
        name: "장현정",
        age: 28,
        local: "서울",
    };
    var favorite = {
        song: "gradation",
        singer: "10cm",
    };
    var project = {
        member: ["kim", "park"],
        days: 30,
        started: true,
    };
})();
