import { 
  Component,
  Input,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.css']
})
export class ProductPriceComponent {
  @HostBinding('attr.class') cssClass = 'px-5 pb-5'
  @Input() price: number | undefined = undefined
  @Input() name: string | undefined = undefined
  @Input() departement: string[] | undefined = undefined
}
