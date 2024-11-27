import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  imports: [ReactiveFormsModule, CommonModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.auth.login({ username, password })) {
        this.router.navigate(["/dashboard"]);
      } else {
        alert("Invalid credentials");
      }
    }
  }
}
