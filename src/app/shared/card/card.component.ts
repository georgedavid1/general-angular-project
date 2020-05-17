import { Component, OnInit, Input } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() header;
  
  constructor() { }

  ngOnInit(): void {
  }

}
