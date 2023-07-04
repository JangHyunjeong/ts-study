// rest param은 array 형태로 들어오니까, 타입도 array로 지정해줘야함
function 함수(...a: number[]) {
  console.log(a);
}
함수(1, 5, 6, 1, 2, 3);

// ...spread operator - 괄호벗겨주세요
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

// destructing
let [변수1, 변수2] = ["안녕", 100];
let { student, age } = { student: true, age: 20 };

// ts에서 destructing 사용하기
let 오브젝트 = { student: true, age: 20 };
function 함수2({ student, age }: { student: boolean; age: number }) {
  console.log(student, age);
}
함수2(오브젝트); // {student: true, age: 20}

// ==== (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈
function 최댓값(...param: number[]) {
  console.log(param);
  let max: number = 0;
  param.forEach(function (item) {
    if (max < item) {
      max = item;
    }
  });
  return max;
}
console.log(최댓값(6, 3, 7, 2));

// ====(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
interface UserType {
  user: string;
  comment: number[];
  admin: boolean;
}
function 함수3({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

console.log(함수3({ user: "kim", comment: [3, 5, 4], admin: false }));

// ==== 숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
type PersonType = number | string | boolean;
function 함수4([age, drink, bool]: PersonType[]): void {
  console.log(age, drink, bool);
}
console.log(함수4([40, "wine", false]));
