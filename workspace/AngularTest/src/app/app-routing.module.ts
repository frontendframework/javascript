import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RouterlistComponent } from './routerlist/routerlist.component';
import { RouterdetailComponent } from './routerdetail/routerdetail.component';

//routing 조건...
const routes: Routes = [
  {path: '', redirectTo: '/users', pathMatch:'full'},
  {path: 'user/:id', component: RouterdetailComponent },
  {path: 'users', component: RouterlistComponent}
];

@NgModule({
  //routing 조건을 forRoot 에 대입만 시키면 f/w이 알아서..
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
