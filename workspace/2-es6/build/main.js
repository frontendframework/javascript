'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _some3 = require('./some');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
    console.log('es5....variable....scope....');
    var name = 'hello';
    console.log(name);
    if (true) {
        var name = 'world';
    }
    console.log(name);
    {
        var name = 'kim';
    }
    console.log(name);

    console.log('es5....function....scope....');
    function some() {
        return 1;
    }
    console.log(some());
    {
        var _some = function _some() {
            return 2;
        };
    }
    console.log(some());

    console.log('es6....variable....scope....');
    var name1 = 'hello';
    console.log(name1);
    if (true) {
        var _name = 'world';
    }
    console.log(name1);
    {
        var _name2 = 'kim';
    }
    console.log(name1);

    console.log('es6....function....scope....');
    var some1 = function some1() {
        return 1;
    };
    console.log(some1());
    {
        var _some2 = function _some2() {
            return 2;
        };
    }
    console.log(some1());

    console.log('default.... argument test.............');
    //함수 매개변수 선언시 default 값 명시.. 
    //외부에서 호출시 매개변수가 전달 안되면 default 값 적용..
    //이게 되면 과도한 함수 overloading 을 피해갈수 있다..
    function some2(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

        console.log('x=' + x + ', y=' + y + ', z=' + z);
    }
    some2(0);
    some2(0, 100);
    some2(0, 100, 200);

    //es6 의 일부분의 기능들이 현존하는 브라우저에서 (IE) 지원이 
    //안된다.. es6로 개발했다면 모든 브라우저에서 해석할수 있는
    //es5로 compile 시켜서 제공해야 한다..

    //es6->es5 : babel...다양한 text를 다른 형식의 text로 ...
    //react쪽의 jsx->es5

    //babel 설치...

    //node : back-end js platform
    //node.exe : back-end js file 실행
    //==>node a.js
    //npm : npm repository server에서 각종 module을 다운로드 역활
    //command 창에서 간단하게 CLI(Command Line Interface)

    //babel 설치.. 라이브러리가 아니라 명령어이다.. global
    //설치한다..
    //>npm install -g babel-cli

    //babel은 각종의 transpile을 위한 tool 이고..
    //babel이 es6->es5로 변형 작업을 하겠다면 그와 관련된
    //모듈을 추가설치해야 한다..
    //>npm install babel-preset-es2015

    //babel 환경파일 작성 .babelrc 파일명으로..

    //es6->es5
    //>babel ./main.js -d ./build

    console.log('module test.....................');
    console.log(_some3.data1);

    var Rectangle = function (_Shape) {
        _inherits(Rectangle, _Shape);

        function Rectangle(id, x, y, width, height) {
            _classCallCheck(this, Rectangle);

            var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, id, x, y));

            _this.width = width;
            _this.height = height;
            return _this;
        }

        _createClass(Rectangle, [{
            key: 'sayHello',
            value: function sayHello() {
                _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), 'sayHello', this).call(this);
                console.log('Rectangle....sayHello()......');
            }
        }]);

        return Rectangle;
    }(_some3.Shape);

    var obj = new Rectangle(1, 0, 0, 10, 10);
    obj.sayHello();
})();