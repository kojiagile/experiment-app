import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Experimental App';

  constructor(
    private router: Router) {}

  // public jumpToNotes(path: string): void {
  //   this.router.navigate([`/${path}`]);
  // }
}
