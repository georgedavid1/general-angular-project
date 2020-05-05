import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'src/app/shared/services/message.service';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.scss']
})
export class PokemonTableComponent {

  @Input() pokemon;
  @Input() cols;

  public messages = [];

  constructor(
    private messageService: MessageService
  ) {
    this.messageService.getMessage().subscribe(message => {
      this.messages.push(message);
    })
  }
}
