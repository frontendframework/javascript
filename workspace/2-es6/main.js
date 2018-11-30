import {data1, Shape} from './some';

(function(){
    console.log('es5....variable....scope....')
    var name='hello'
    console.log(name)
    if(true){
        var name='world'
    }
    console.log(name)
    {
        var name='kim'
    }
    console.log(name)

    console.log('es5....function....scope....')
    function some(){ return 1 }
    console.log(some())
    {
        function some(){ return 2 }
    }
    console.log(some())

    console.log('es6....variable....scope....')
    let name1='hello'
    console.log(name1)
    if(true){
        let name1='world'
    }
    console.log(name1)
    {
        let name1='kim'
    }
    console.log(name1)

    console.log('es6....function....scope....')
    const some1 = function() { return 1 }
    console.log(some1())
    {
        const some1= function(){ return 2 }
    }
    console.log(some1())

    console.log('default.... argument test.............')
    //함수 매개변수 선언시 default 값 명시.. 
    //외부에서 호출시 매개변수가 전달 안되면 default 값 적용..
    //이게 되면 과도한 함수 overloading 을 피해갈수 있다..
    function some2(x, y=10, z=20){
        console.log(`x=${x}, y=${y}, z=${z}`)
    }
    some2(0)
    some2(0, 100)
    some2(0, 100, 200)

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

    console.log('module test.....................')
    console.log(data1)

    class Rectangle extends Shape {
        constructor(id, x, y, width, height){
            super(id, x, y)
            this.width=width
            this.height=height
        }
        sayHello(){
            super.sayHello()
            console.log('Rectangle....sayHello()......')
        }
    }
    var obj=new Rectangle(1, 0, 0, 10, 10)
    obj.sayHello()

    //es6의 module화 프로그램을 작성햇다면.. export... import...
    //module화를 어떤방식으로 할것인가?(CommonJS?, CMD?)등을 결정해 주어야
    //그에 맞게..코드변형해준다...

    //npm 으로 모든 개발자의 js 환경을 동일환경...
    //>npm init ==>package.json 파일 자동으로 만들어 진다..
    //package.json :npm 환경파일...

    //moduel download시 -save 옵션을 추가해 package.json 에 등록...

    //package.json 을 받아서.. install 만 시키면 된다..
    //>npm install

    //webpack (일종의 js 의 build tool.....)
    //webpack.config.js : webpack의 환경파일...

    //.babelrc 파일의 es2015를 env로 변경..
    //env : 사용하고 있는 모든 presets를 다 이용...

    //webpack 실행...
    //webpack을 직접 실행시킬수도 있지만 package.json 에
    //실행명령어가 등록되어 있다면..npm 으로 실행..

    //npm run build




})()