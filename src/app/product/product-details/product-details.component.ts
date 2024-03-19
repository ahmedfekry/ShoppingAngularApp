import { Component, Input } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product } from '../../Models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  Product : Product;

  constructor(){
  }

  @Input() ProductListComp! : ProductListComponent;

  ngOnInit(){
    this.Product = this.ProductListComp.selectedProduct;
    this.initBootstrap();
  }

  // ngAfterViewInit() {
  //   this.initBootstrap();
  // }

  initBootstrap() {
    const offcanvasElement = document.getElementById('offcanvasRight') as Element;
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    offcanvas.toggle();
  }
}
