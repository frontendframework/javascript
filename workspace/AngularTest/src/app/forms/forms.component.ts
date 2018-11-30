import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  addresses=['seoul','busan','incheon']
  model=new User(1, 'kkang','0100000','seoul')

  submitted=false

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {this.submitted=true}

  newUser(){
    this.model=new User(2, '','','')
  }

}
