import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  mergeMap,
  map,
  concatAll,
  tap,
  switchMap,
  flatMap
} from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  title = 'pokemon-dictionary';
  pokemonList = [];
  msgs = [];
  sales: any[];
  headers: any[];

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {
    this.messageService.getMessage().subscribe((messages) => {
      this.msgs.push(messages);
    });
    //1) nested subsrbe. =
    //2) after that works try merging
    this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon')
      .pipe(
        map((x) => x.results),
        map((y) => {
          this.httpClient.get(y.url);
        })
      )
      .subscribe((data: any) => {
        console.log('yeller ' + JSON.stringify(data));
        // data.results.forEach((element: any) => {
        //   this.httpClient.get(element.url).subscribe((data: any) => {
        //     const {
        //       id,
        //       name,
        //       sprites: { front_default: img },
        //       stats: [
        //         { base_stat: speed },
        //         { base_stat: specialAttack },
        //         { base_stat: specialDefense },
        //         { base_stat: defense },
        //         { base_stat: attack },
        //         { base_stat: hp }
        //       ],
        //       types: [type1, type2 = 0],
        //       weight
        //     } = data;
        //     this.pokemonList.push({
        //       id,
        //       name,
        //       img,
        //       speed,
        //       specialAttack,
        //       specialDefense,
        //       defense,
        //       attack,
        //       hp,
        //       type1,
        //       type2,
        //       weight
        //     });
        //   });
        // });
      });

    this.headers = [
      { field: 'id', header: 'ID' },
      { field: 'sprites.front_default', header: 'Photo' },
      { field: 'name', header: 'Name' },
      { field: 'attack', header: 'Attack' },
      { field: 'defense', header: 'Defense' },
      { field: 'speed', header: 'Speed' },
      { field: 'specialAttack', header: 'Special Attack' },
      { field: 'specialDefense', header: 'Special Defense' },
      { field: 'hp', header: 'HP' },
      { field: 'type', header: 'Type' },
      { field: 'button', header: 'Button' }
    ];
  }

  addAMessage() {
    this.messageService.sendMessage('i think it working');
  }
}
