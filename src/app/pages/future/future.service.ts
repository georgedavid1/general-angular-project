import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Idea } from './../../shared/models/idea.model';
import { analytics } from 'firebase';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class FutureService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getIdeas() {
    //make sure it returns idea object
    return this.firestore.collection('idea').valueChanges();
  }

  getIdea(id: String){
    //make sure it returns idea object
    return this.firestore.collection('idea').valueChanges();
  }

  createIdea(idea:Idea): void {
    idea.id = this.firestore.createId();
    idea.creationDate = new Date();
    idea.completed = false;
    console.log("GUESS WHO HAS AN ID?! " + JSON.stringify(idea))
    // this.firestore.collection('idea').add(idea);
  }

  updateIdea(idea): void{
    delete idea.id;
    this.firestore.doc('idea/' + idea.id).update(idea);
  }

  deleteIdea(id: string): void{
    this.firestore.doc('idea/' + id).delete();
  }
}
