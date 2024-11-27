import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AuthService {
  private isAuthenticated = false;
  private currentUser: string | null = null;

  constructor() {
    const storedAuthState = localStorage.getItem("authState");
    if (storedAuthState) {
      const { isAuthenticated, currentUser } = JSON.parse(storedAuthState);
      this.isAuthenticated = isAuthenticated;
      this.currentUser = currentUser;
    }
  }
  login({ username, password }: { username: string; password: string }): boolean {
    if (username === "master@lemoncode.net" && password === "12345678") {
      this.isAuthenticated = true;
      this.currentUser = username;
      this.saveState();
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.clearState();
  }

  isLogged(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.currentUser || "";
  }

  private saveState(): void {
    const authState = {
      isAuthenticated: this.isAuthenticated,
      currentUser: this.currentUser,
    };
    localStorage.setItem("authState", JSON.stringify(authState));
  }

  private clearState(): void {
    localStorage.removeItem("authState");
  }
}
