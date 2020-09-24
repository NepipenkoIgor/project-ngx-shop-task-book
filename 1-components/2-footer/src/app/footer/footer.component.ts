import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
public author = 'Angular Course';
public currentYear = new Date().getFullYear();
}
