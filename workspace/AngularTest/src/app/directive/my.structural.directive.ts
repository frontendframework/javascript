import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myDirective]' })
export class MyDirective {
    //ViewContainerRef : direcrive가 적용된 태그 자체 지칭...
    constructor(private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef) { }

    //directive는 component에서 사용할거다..
    //directive만 추가되어서 특별한 작업을 해줄수도 있지만..
    //대부분의 경우 directive를 적용한 태그의 attribute 값을 획득하여 작업한다..

    //component 데이터 획득.. 즉 attribute 값 획득..
    //count 라는 attribute 값을 loopCount 변수에...
    @Input('count') loopCount: number;

    //attribute 값을 받아 추가 로직수행이 필요하다면 함수형식으로..
    //필요 없다면 변수형식으로..
    //myDirective attribute(directive 자체)에 대입된 값...
    @Input() set myDirective(condition: boolean) {
        if (condition) {
            if (this.loopCount) {
                for (let i = 0; i < this.loopCount; i++) {
                    this.viewContainer.createEmbeddedView(this.templateRef)
                }
            }else {
                this.viewContainer.createEmbeddedView(this.templateRef)
            }
        }else {
            this.viewContainer.clear();
        }
    }
}