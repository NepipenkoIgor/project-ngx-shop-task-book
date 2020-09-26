import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: IProduct = {} as IProduct;
  @Output() goToProduct = new EventEmitter<string>();
 @Input() terminalMessage: string;

  public redirectTo(){
this.goToProduct.emit(this.terminalMessage);
  }
}
