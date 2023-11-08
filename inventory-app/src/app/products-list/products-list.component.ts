import { 
  Component, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
  intialProduct: Product =  {
    sku: '',
    name: '',
    price: 0,
    imageUrl: '',
    departement: [],
  }

 @Input("item") product = this.intialProduct
 @Output() onProductSelected: EventEmitter<Product>
 currentProduct = this.intialProduct

 constructor() {
  this.onProductSelected = new EventEmitter();
 }

 onClickedItem(selectedProduct: Product){
  this.intialProduct = selectedProduct
  this.onProductSelected.emit(selectedProduct);
 }

 isSelected(product: Product): boolean {
  if (!this.product.sku || !this.currentProduct.sku) {
    return false;
  }
  return this.product.sku === this.currentProduct.sku;
 }
}
