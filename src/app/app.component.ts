import { Component } from '@angular/core';
import { products } from './const/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material-card';
  productArr=products
}
