import { Component } from '@angular/core';
import { products } from 'src/app/const/product.component';
import { Iproduct } from 'src/app/model/product.component';

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent{
     productArr:Array<Iproduct> = products;
}