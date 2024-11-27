import { Component, Input } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { PrivateMenuComponent } from "../../menu/private-menu/private-menu.component";

@Component({
  selector: "app-private-header",
  imports: [PrivateMenuComponent],
  templateUrl: "./private-header.component.html",
  styleUrl: "./private-header.component.scss",
})
export class PrivateHeaderComponent {
  @Input() title: string = "";

  constructor(public auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(["/"]);
  }
}
