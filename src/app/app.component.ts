import { Component } from '@angular/core';
import { products } from './const/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-card';
  productArr=products;
  // count=0
  // onclickDisplay="no product Added in cart"
  // onclick(){
  //   if(this.count <5){
  //     this.count++
  //     this.onclickDisplay=`${this.count} products added successfuly`
  //     console.log(this.onclickDisplay)
  //   }
  // }
}
