import {Product} from './product'
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

 @Injectable({
     providedIn: 'root'
 })
export class ProductService{
    public  getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(101,'Mouse',350),
            new Product(102,'Keyboard',750),
            new Product(103,'SSD',2500)
        ]
 
        return products;               
    }
    private subject = new Subject<any>();
    sendclickevent(){
        this.subject.next('');
    }
    getclickevent():Observable<any>{
        return this.subject.asObservable();
    }
}