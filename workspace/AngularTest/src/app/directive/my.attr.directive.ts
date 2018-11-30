import { Directive, ElementRef, Output, Input, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myColor]',
    host:{
        //event 등록.. 클래스 내에서.. Decorator로 등록해도 되고..
        '(mouseenter)':'onMouseEnter($event.target)',
        '(mouseleave)':'onMouseLeave($event.target)'
    }
})
export class MyColorDirective {
    private defaultColor: string = 'blue'
    constructor(private el: ElementRef){}
    
    //component data 획득.. myColor attr 값 획득...
    @Input() set myColor(color: string){
        this.defaultColor=color;
        this.setColor(this.defaultColor)
    }

    //component 데이터 획득은.. @Input으로..
    //반대로.. Component에 데이터 전달...이벤트발생으로..
    //이벤트 발생기 하나 선언..
    @Output()
    colorChangeEvt: EventEmitter<string>=new EventEmitter<string>()

    onMouseEnter(){
        this.setColor('green')
    }
    onMouseLeave(){
        this.setColor(this.defaultColor)
    }
    private setColor(color: string){
        //mouse enter, leave 이벤트는 directive에서 잡은 이벤트다..
        //그때 color 값은... directive에서 발생한 데이터다..
        //이 데이터가 component에서도 필요하다는 가정하에..(component 화면에
        //찍으려고...)
        //이벤트 발생시키면 된다..
        this.colorChangeEvt.next(color)
        this.el.nativeElement.style.color=color
    }
}