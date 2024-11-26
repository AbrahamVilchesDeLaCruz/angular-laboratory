import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private currentUser: string | null = null;

  login({ username, password }: { username: string; password: string }): boolean {
    if (username === "master@lemoncode.net" && password === "12345678") {
      this.isAuthenticated = true;
      this.currentUser = username;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isLogged(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.currentUser || "";
  }
}
