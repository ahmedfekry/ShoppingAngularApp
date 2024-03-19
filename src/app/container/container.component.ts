import { Component, ViewChild,  } from '@angular/core';
import { ProductListComponent } from '../product/product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = "";

  @ViewChild(ProductListComponent) productList! : ProductListComponent;

  textSearchChanged(value: string){
    this.searchText = value;
  }
}
