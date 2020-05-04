import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent {

  @Input() pokemon;
  @Input() cols;

  constructor() {

  }
}
