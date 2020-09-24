import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICartProduct} from '../../../../../shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})


export class ShopCardComponent {
  @Input() product: ICartProduct = {} as ICartProduct;
  @Output() increment = new EventEmitter<number>();
  @Output() decrement = new EventEmitter<number>();

  public decrementProductInCart() {
    this.decrement.emit(this.product?.count);
  }

  public incrementProductInCart() {
    this.increment.emit(this.product?.count);
  }

}
