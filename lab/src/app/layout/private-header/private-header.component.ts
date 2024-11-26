import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-private-header",
  templateUrl: "./private-header.component.html",
  standalone: true,
})
export class PrivateHeaderComponent {
  constructor(public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
