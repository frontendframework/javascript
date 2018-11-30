import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from './user.service';

@Component({
  selector: 'app-injection',
  templateUrl: './injection.component.html',
  styleUrls: ['./injection.component.css'],
  providers: [UserService]
})
export class InjectionComponent implements OnInit {

  users: User[]
  error: any

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
        users => this.users=users,
        error => this.error=error
      )
  }

}
