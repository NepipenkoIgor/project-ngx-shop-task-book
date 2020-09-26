import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output,} from '@angular/core';

import {IProduct} from '../../../../../shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
@Input() product: IProduct = {} as IProduct;
 @Output()  addToCart = new EventEmitter();
  @Output()  goToProduct = new EventEmitter();


public addToBasket(){
  this.addToCart.emit();
}
  public redirectTo(){
    this.goToProduct.emit();
  }
}
