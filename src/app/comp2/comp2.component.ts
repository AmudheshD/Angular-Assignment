import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    
  }
  clickme(){
    this.productService.sendclickevent();
  }
  
}
