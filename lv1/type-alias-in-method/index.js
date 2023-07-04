(function () {
    // ==== 1. 함수타입 만들기
    // 모든 함수 타입은 화살표 함수 모양으로!
    // type 함수타입 = () => {};
    // 이 함수 타입은 무조건 string타입의 파라미터, number 타입 반환
    // type 함수타입 = (a: string) => number;
    var cutZero = function (str) {
        if (str[0] === "0") {
            str = str.slice(1, str.length);
            return str;
        }
        else {
            return str;
        }
    };
    console.log(cutZero("0뭐가문젠데"));
    var removeDash = function (str) {
        var result = str.replace(/-/g, "");
        return parseInt(result);
    };
    function 만들함수(str, func1, func2) {
        var result1 = func1(str);
        var result2 = func2(result1);
        return result2;
    }
    console.log(만들함수("010-1111-2222", cutZero, removeDash));
})();
