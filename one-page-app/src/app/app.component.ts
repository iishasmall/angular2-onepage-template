import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <app-header></app-header>
  <app-home></app-home>
  <app-about></app-about>
  <app-work></app-work>
  <app-footer></app-footer>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
