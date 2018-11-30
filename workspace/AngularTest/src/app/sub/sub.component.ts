//ViewChild : 하위 태그 selector 제공..
//ElementRef : 태그 객체..
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  @ViewChild('div1') div1: ElementRef

  //DI 개념으로 객체 획득.. private 으로 선언.. class member....
  //전달된 dom 은 이 component의 root 태그..
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  change(){
    this.div1.nativeElement.style.color='red'

    var div2=this.elRef.nativeElement.querySelector('#div2')
    div2.innerHTML="i am kkang"
    div2.style.backgroundColor='yellow'
  }

}
