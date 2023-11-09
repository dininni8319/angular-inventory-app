import { 
  Component,

} from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[]
  
  constructor() {
    this.products = [
      new Product(
      'MYSHOES',
      'Black Running Shoes', 'https://media.istockphoto.com/id/1249369867/de/foto/ein-paar-schuh-des-neuesten-trends.jpg?s=1024x1024&w=is&k=20&c=XEWxSi_X4u16R7kS1XDggDYUjbkXMkSqMDAitUjLAh4=', ['Men', 'Shoes', 'Running Shoes']
      , 109.99),
      new Product(
      'NEATOJACKET',
      'Blue Jacket', 'https://media.istockphoto.com/id/1144531923/de/foto/europ%C3%A4isch-h%C3%BCbsche-junge-hipsterfrau-in-trendiger-sonnenbrille-in-einem-vintage-mantel-in.jpg?s=1024x1024&w=is&k=20&c=mGfPZwLHL9wE_IHGhBt1fQTQ9gVz1i7F82znugTvEc4=', 
      ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new Product(
      'NICEHAT',
      'A Nice Black Hat', 'https://media.istockphoto.com/id/864713752/de/foto/baseball-m%C3%BCtze.jpg?s=1024x1024&w=is&k=20&c=tG5AOgc9DAy_yAC4kUzINhR_zaBOj7ZGdTGu4FxeSCM=', ['Men', 'Accessories', 'Hats'],
      29.99),
      new Product(
        'MYSHOES',
        'Nice an Warm',
        'https://media.istockphoto.com/id/1249369867/de/foto/ein-paar-schuh-des-neuesten-trends.jpg?s=1024x1024&w=is&k=20&c=XEWxSi_X4u16R7kS1XDggDYUjbkXMkSqMDAitUjLAh4=',
        ['Men', 'Shoes', 'Running Shoe'], 54.99
      )
    ]
  }

  productWasSelected(product: Product){
    console.log('Product clicked: ', product);
  }
}
