import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataService: DataService, private router: Router) { }

  public get isLogin(): boolean {
    return this.dataService.isLogin;
  }

  public get userName(): string {
    return this.dataService.user;
  }

  public logout(): void {
    this.dataService.user = null;
    this.router.navigate(['']);
  }
}
