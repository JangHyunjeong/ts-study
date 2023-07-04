// 이 타입이 아니라, interface 사용해도 같음.
type Square = { color: string; width: number };
let 네모: Square = {
  color: "red",
  width: 100,
};

// interface 는 다음과 같이 씀.
interface Square2 {
  color: string;
  width: number;
}
let 네모2: Square = {
  color: "red",
  width: 100,
};

// interface 장점 : extends로 복사 가능
// class와 비슷한 구조
interface Student {
  name: string;
}
interface Student {
  score: number;
}
interface Teacher extends Student {
  age: number;
}
let 학생: Student = { name: "Kim", score: 50 };

let 선생: Teacher = { name: "Kim", score: 50, age: 20 };

// type vs interface
// interface는 중복선언 가능 - 자동으로 합쳐줌.
// 외부 라이브러리는 interface 많이 사용함. -> 커스텀이 쉽도록

// ==== (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

// ==== (숙제2) array 안에 object 여러개가 필요합니다.
interface Cart {
  product: string;
  price: number;
}
let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// ==== (숙제3) 위에서 만든 타입을 extends 해봅시다.
interface Cart2 extends Cart {
  card: boolean;
}
let 장바구니2: Cart2 = { product: "청소기", price: 7000, card: false };

// ==== 숙제4) object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.
interface ObjType {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let obj: ObjType = {
  plus(a: number, b: number): number {
    return a + b;
  },
  minus(a: number, b: number): number {
    return a - b;
  },
};
