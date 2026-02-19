import { Component } from '@angular/core';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponentComponent],
  template: `<app-my-component></app-my-component>`
})
export class AppComponent {}
