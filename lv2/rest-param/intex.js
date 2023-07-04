var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// rest param은 array 형태로 들어오니까, 타입도 array로 지정해줘야함
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 5, 6, 1, 2, 3);
// ...spread operator - 괄호벗겨주세요
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
// destructing
var _a = ["안녕", 100], 변수1 = _a[0], 변수2 = _a[1];
var _b = { student: true, age: 20 }, student = _b.student, age = _b.age;
// ts에서 destructing 사용하기
var 오브젝트 = { student: true, age: 20 };
function 함수2(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수2(오브젝트); // {student: true, age: 20}
// ==== (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function 최댓값() {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    console.log(param);
    var max = 0;
    param.forEach(function (item) {
        if (max < item) {
            max = item;
        }
    });
    return max;
}
console.log(최댓값(6, 3, 7, 2));
function 함수3(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
console.log(함수3({ user: "kim", comment: [3, 5, 4], admin: false }));
function 함수4(_a) {
    var age = _a[0], drink = _a[1], bool = _a[2];
    console.log(age, drink, bool);
}
console.log(함수4([40, "wine", false]));
