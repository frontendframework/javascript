let data1="hello"
let data2="world"

function funA(){
    console.log(`some.js...funA...${data1}, ${data2}`)
}
class Shape {
    constructor(id, x, y){
        this.id=id
        this.x=x
        this.y=y
    }
    sayHello(){
        console.log(`Shape...${this.id},${this.x},${this.y}`)
    }
}

export {data1, funA, Shape}