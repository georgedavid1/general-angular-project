import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  title: string = 'pokemon-dictionary';
  pokemon: any;
  sales: any[];
  headers: any[];
  constructor(
    private httpClient: HttpClient
  ) {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon').subscribe((data: any)=>{
      this.pokemon = data.results;
    })
    this.headers = [
      { field: 'name', header: 'Name' },
      { field: 'url', header: 'URL' }
    ];
  }

}
