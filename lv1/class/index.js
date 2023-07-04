(function () {
    var Person = /** @class */ (function () {
        function Person(a) {
            // class 사용시에는, 여기 필드테서 type값 지정
            this.data = 0;
            this.name = a;
        }
        // prototype 함수는 여기에 만듦
        Person.prototype.함수 = function (a) {
            console.log("안녕" + a);
        };
        return Person;
    }());
    //Person.prototype.함수 = function(){}
    var 사람1 = new Person("Kim");
    console.log(사람1);
    사람1.함수("구도일");
    // ==== 문제1.
    var Car = /** @class */ (function () {
        function Car(a, b) {
            this.model = a;
            this.price = b;
        }
        Car.prototype.tax = function () {
            console.log(this.price);
            return this.price * 0.1;
        };
        return Car;
    }());
    var car1 = new Car("소나타", 3000);
    console.log(car1);
    console.log(car1.tax());
    // ==== 문제2.
    var Word = /** @class */ (function () {
        function Word() {
            var param = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                param[_i] = arguments[_i];
            }
            var _this = this;
            this.num = [];
            this.str = [];
            param.forEach(function (item) {
                if (typeof item === "number") {
                    _this.num.push(item);
                }
                else if (typeof item === "string") {
                    _this.str.push(item);
                }
                return _this.num, _this.str;
            });
        }
        return Word;
    }());
    var obj = new Word("kim", 3, 5, "park");
    console.log(obj);
    console.log(obj.num); //[3,5]
    console.log(obj.str); //['kim', 'park']
})();
