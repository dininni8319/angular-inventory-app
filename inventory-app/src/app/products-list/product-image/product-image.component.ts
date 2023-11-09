import { 
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-product-image',
  template: `
    <a href="#">
      <img class="p-8 rounded-t-lg" [src]="imageUrl" alt="product image" />
    </a>
  `,
  styleUrls: ['./product-image.component.css']
})

export class ProductImageComponent {
  @Input() imageUrl: string | undefined = undefined
}
