//선임 개발자가 만드는 html controller 코드의 재사용...가정..
var myService=angular.module('myService',[])

//provider만 module의 config 블락에서 사전 작업을 할수 있다..
myService.provider('helloProvider', function(){
    this.name="kkang"
    //provider는 꼭 this.$get 함수를 가져야 한다..
    this.$get = function(){
        var name=this.name
        return {
            //return 되는 부분이 controller에서 호출...
            sayHello: function(){
                return 'Hello Provider..'+name
            }
        }
    }
    this.setName=function(name){
        this.name=name
    }
})

myService.factory('helloFactory', function(){
    //provider의 this.$get 내부만 작성한 경우..
    var count=0;
    for(var i=1; i<11; i++){
        count += i
    }
    return {
        sayHello: function(){
            return 'Hello Factory..'+count
        }
    }
})

//factory의 return 안쪽 부분만 작성한 경우..
myService.service('listService', function(){
    var uid=1;
    var list=[]
    this.save=function(item){
        if(item.id==null){
            //add
            item.id=uid++
            list.push(item)
        }else {
            //update...
            for(i in list){
                if(list[i].id==item.id){
                    list[i]=item
                }
            }
        }
    }
    this.get = function(id){
        for(i in list){
            if(list[i].id==id){
                return list[i]
            }
        }
    }
    this.remove=function(id){
        for(i in list){
            if(list[i].id==id){
                list.splice(i, 1)
            }
        }
    }
    this.list=function(){
        return list
    }
})

//이 모듈이 실제 이용되기 전에 사전 작업 가능.. config...
//config에서 핸들링 가능한건 provider만....
//config에 전달되는 provider도 DI 개념으로 적용된다.. 이름이 중요하다..
//<<provider_name>>+Provider
myService.config(function(helloProviderProvider){
    helloProviderProvider.setName('kim')
})