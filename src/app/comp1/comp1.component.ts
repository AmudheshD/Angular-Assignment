import { Component, OnInit,Input } from '@angular/core';
import { Comp2Component } from '../comp2/comp2.component';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  products:Product[];
  clickeventsubscription:Subscription;
  constructor(private productService: ProductService){
    this.clickeventsubscription = this.productService.getclickevent().subscribe(()=>{
      this.increamentcount();
    })
    this.productService=new ProductService();
  }
  // just for testing
  // count:number = 0;
  // name:string;
  // list: string[] = ['bala','paraveen','raghul'];
  // list1:string[];
  increamentcount(){
    // this.list1 = this.list;
    // return this.list1;
    this.products=this.productService.getProducts();
    return this.products
  }

  ngOnInit(): void {
  }

}
