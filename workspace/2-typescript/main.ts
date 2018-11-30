//data type... access modifier....
class Super {
    name: string;
    protected email: string;
    private address: string;
}
class Sub extends Super {
    some() {
        this.name = "hello"
        this.email = "a@a.com"
        // this.address="seoult"//error
    }
}

//member variable 선언....
class MyClass {
    //생성자의 매개변수에 access modifier 추가하는 순간 class의 member가 된다.
    constructor(name: string, private email: string, public address: string) {
    }
    some() {
        // this.name="aaa";//error
        this.email = "a@a.com"
        this.address = "seoul"
    }
}

//getter/setter...............
class User {
    private _name: string
    //함수에 get, set 이 추가되면 외부에서는 변수처럼 이용
    get name(){
        return this._name.toUpperCase()
    }
    set name(name: string){
        this._name=name
    }
}
let user=new User()
user.name="kkang"
console.log(user.name)

//static..................
class MyClass2 {
    static count: number
    name: string
    static some(){
        this.count=10
        // this.name="kkang"//error
    }
}
MyClass2.count=20
// MyClass2.name="kkang"//error
let obj=new MyClass2()
// obj.count=30;//error
obj.name="kkang"

//abstract...............
abstract class AbstractClass {
    abstract name: string
    abstract some()
}
class AbstractSub extends AbstractClass {
    name: string
    some(){}
}

//ts 파일이다.. 모든 브라우저의 js engine이 해석 못한다..
//js(es5)로 변형시켜서 적용해야 한다..
//ts compiler.. tsc 설치...
//>npm install -g typescript
//compile......
//>tsc main.ts
