import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  books = [
    { name: 'test', author: 'face', price: 'but hey though' },
    { name: 'test', author: 'face', price: 'but hey though' }
  ];
}
