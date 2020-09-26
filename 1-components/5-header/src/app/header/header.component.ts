import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() goToBasket  = new EventEmitter();  // @Output()  addToCart = new EventEmitter();
  // public goToProduct: EventEmitter<void> = new EventEmitter<void>();
public counter = 5;

public redirectTo(){
this.goToBasket.emit();
}
}
