import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//two-way data binding 은 FromsModule에서 제공하는 기능..
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { DirectiveComponent } from './directive/directive.component';

import { MyDirective } from './directive/my.structural.directive';
import { MyColorDirective } from './directive/my.attr.directive';
import { InjectionComponent } from './injection/injection.component';
import { FormsComponent } from './forms/forms.component';
import { RouterlistComponent } from './routerlist/routerlist.component';
import { RouterdetailComponent } from './routerdetail/routerdetail.component';

import { UserService } from './router.service';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent,
    DirectiveComponent,
    MyDirective,
    MyColorDirective,
    InjectionComponent,
    FormsComponent,
    RouterlistComponent,
    RouterdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
