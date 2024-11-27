import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./layout/footer/footer.component";
import { PublicHeaderComponent } from "./layout/public-header/public-header.component";
import { PrivateHeaderComponent } from "./layout/private-header/private-header.component";
import { AuthService } from "./services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    FooterComponent,
    PublicHeaderComponent,
    PrivateHeaderComponent,
    CommonModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "lab";

  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLogged();
  }
}
