import { Component, OnInit } from '@angular/core';
//router 제어...
import { Router } from '@angular/router';
import { UserService } from '../router.service';
import { User } from '../user';

@Component({
  selector: 'app-routerlist',
  templateUrl: './routerlist.component.html',
  styleUrls: ['./routerlist.component.css']
})
export class RouterlistComponent implements OnInit {

  users: User[]

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users=this.userService.getUsers()
  }

  gotoDetail(user: User){
    let link=['/user', user.id]
    this.router.navigate(link)
  }

}
