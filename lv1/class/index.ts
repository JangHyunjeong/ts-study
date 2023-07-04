(function () {
  class Person {
    // class 사용시에는, 여기 필드테서 type값 지정
    data = 0;
    name: string;
    constructor(a: string) {
      this.name = a;
    }

    // prototype 함수는 여기에 만듦
    함수(a: string) {
      console.log("안녕" + a);
    }
  }
  //Person.prototype.함수 = function(){}

  let 사람1 = new Person("Kim");
  console.log(사람1);
  사람1.함수("구도일");

  // ==== 문제1.
  class Car {
    model: string;
    price: number;
    constructor(a: string, b: number) {
      this.model = a;
      this.price = b;
    }
    tax(): number {
      console.log(this.price);
      return this.price * 0.1;
    }
  }

  let car1 = new Car("소나타", 3000);
  console.log(car1);
  console.log(car1.tax());

  // ==== 문제2.
  class Word {
    num: number[];
    str: string[];
    constructor(...param: (number | string)[]) {
      this.num = [];
      this.str = [];

      param.forEach((item: string | number) => {
        if (typeof item === "number") {
          this.num.push(item);
        } else if (typeof item === "string") {
          this.str.push(item);
        }
        return this.num, this.str;
      });
    }
  }

  let obj = new Word("kim", 3, 5, "park");
  console.log(obj);
  console.log(obj.num); //[3,5]
  console.log(obj.str); //['kim', 'park']
})();
