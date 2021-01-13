import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cookies';
  cookieset = false;
  constructor(private cookie: CookieService) {}
  clicked() {
    this.cookie.set('Developer', 'Rounak');
    this.cookieset = true;
  }
}
