import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, PublicHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab';
}
