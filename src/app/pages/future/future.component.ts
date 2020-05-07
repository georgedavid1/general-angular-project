import { Component, OnInit } from '@angular/core';
import { FutureService } from './future.service';

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit {
  ideas = [];
  ideaInput = 'hmm';
  data = '';
  constructor(
    private futureService: FutureService
  ) { 
    futureService.getIdeas().subscribe(ideas => {
      console.log(JSON.stringify(ideas))
      this.ideas = ideas;});
  }

  ngOnInit(): void {
  }
  
  saveIdea(idea: string){
    this.futureService.createIdea(idea);
  }
}
