import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
export class Data {
  results:any[];
}
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {

  title: string = 'pokemon-dictionary';
  pokemon: any;
  pokemonList = [];
  sales: any[];
  headers: any[];
  test: any;
  constructor(
    private httpClient: HttpClient
  ) {
    //1) nested subsrbe. =
    //2) after that works try merging
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon')
    .subscribe((data: any)=>{
      forkJoin
        data.results.forEach((element:any) => {
            this.httpClient.get(element.url).subscribe((data:any)=>{
              const {id, name} = data;
              console.log(id + " " +  name)
              this.pokemonList.push({id, name});
            });
        });
    });

    this.headers = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' }
    ];
  }

}
// .results.forEach(element => {
//   // console.log('ELEMENT ' + JSON.stringify(element));
//   this.httpClient.get(element.url)
// }))