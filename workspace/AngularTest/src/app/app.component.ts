import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //화면에 binding 되기 위한 데이터.. 
  //특별 규칙없다.. 순수 개발자 변수..
  user: User = {
    id: 1,
    name: 'kkang',
    phone: '0100000',
    email:'a@a.com'
  }
}
