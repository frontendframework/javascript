import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products=[]
  name=""
  price=""
  addProduct(event){
    this.products.push({name: this.name, price: this.price})
    this.name=""
    this.price=""
  }

  public color: string='blue'
  changeColor(color: string){
    this.color=color
  }

}
