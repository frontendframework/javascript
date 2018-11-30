import { Component, OnInit } from '@angular/core';
//router 정보 획득..
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../router.service';
import { User } from '../user';

@Component({
  selector: 'app-routerdetail',
  templateUrl: './routerdetail.component.html',
  styleUrls: ['./routerdetail.component.css']
})
export class RouterdetailComponent implements OnInit {

  private user: User

  constructor(private userService: UserService,
      private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      let id=params['id']
      this.user=this.userService.getUser(id)
    })
  }

  goBack(){
    window.history.back()
  }

}
