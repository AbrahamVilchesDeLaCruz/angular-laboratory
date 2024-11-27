import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
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
export class AppComponent implements OnInit {
  title = "lab";

  get isLoggedIn(): boolean {
    return this.authService.isLogged();
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.checkAuthentication();
  }

  private checkAuthentication(): void {
    if (this.authService.isLogged()) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
