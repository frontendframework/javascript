var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//data type... access modifier....
var Super = /** @class */ (function () {
    function Super() {
    }
    return Super;
}());
var Sub = /** @class */ (function (_super) {
    __extends(Sub, _super);
    function Sub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sub.prototype.some = function () {
        this.name = "hello";
        this.email = "a@a.com";
        // this.address="seoult"//error
    };
    return Sub;
}(Super));
//member variable 선언....
var MyClass = /** @class */ (function () {
    //생성자의 매개변수에 access modifier 추가하는 순간 class의 member가 된다.
    function MyClass(name, email, address) {
        this.email = email;
        this.address = address;
    }
    MyClass.prototype.some = function () {
        // this.name="aaa";//error
        this.email = "a@a.com";
        this.address = "seoul";
    };
    return MyClass;
}());
//getter/setter...............
var User = /** @class */ (function () {
    function User() {
    }
    Object.defineProperty(User.prototype, "name", {
        //함수에 get, set 이 추가되면 외부에서는 변수처럼 이용
        get: function () {
            return this._name.toUpperCase();
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
var user = new User();
user.name = "kkang";
console.log(user.name);
//static..................
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
    }
    MyClass2.some = function () {
        this.count = 10;
        // this.name="kkang"//error
    };
    return MyClass2;
}());
MyClass2.count = 20;
// MyClass2.name="kkang"//error
var obj = new MyClass2();
// obj.count=30;//error
obj.name = "kkang";
//abstract...............
var AbstractClass = /** @class */ (function () {
    function AbstractClass() {
    }
    return AbstractClass;
}());
var AbstractSub = /** @class */ (function (_super) {
    __extends(AbstractSub, _super);
    function AbstractSub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractSub.prototype.some = function () { };
    return AbstractSub;
}(AbstractClass));
//ts 파일이다.. 모든 브라우저의 js engine이 해석 못한다..
//js(es5)로 변형시켜서 적용해야 한다..
//ts compiler.. tsc 설치...
//>npm install -g typescript
//compile......
//>tsc main.ts
