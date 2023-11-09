import { 
  Component, 
  Input,
  Output,
  EventEmitter,
  HostBinding,
} from '@angular/core';
import { Product } from '../product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent {
 @HostBinding('attr.class') cssClass = `
    w-full max-w-sm 
    bg-white border 
    border-gray-200 
    rounded-lg shadow
    dark:bg-gray-800 dark:border-gray-700
  `
 @Input("item") product: Product | null = null
 @Output() onProductSelected: EventEmitter<Product> = new EventEmitter()
 
 currentProduct: Product | null = null
 selected: boolean = false

 onClickedItem(selectedProduct: Product){
  this.currentProduct = selectedProduct
  this.onProductSelected.emit(selectedProduct);
  this.selected = !this.selected
 }
}
