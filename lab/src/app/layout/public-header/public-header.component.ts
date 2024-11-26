import { Component } from '@angular/core';
import { PublicMenuComponent } from '../../menu/public-menu/public-menu.component';

@Component({
  selector: 'app-public-header',
  imports: [PublicMenuComponent],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {

}
