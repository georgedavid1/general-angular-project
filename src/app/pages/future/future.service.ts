import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

export class Idea {
  id: string;
  idea: string;
}

@Injectable({
  providedIn: 'root'
})
export class FutureService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  getIdeas() {
    return this.firestore.collection('idea').snapshotChanges();
  }

  createIdea(idea: string){
    return this.firestore.collection('idea').add({idea: idea});
  }

  updateIdea(idea: Idea){
    delete idea.id;
    this.firestore.doc('idea/' + idea.id).update(idea);
  }

  deleteIdea(policyId: string){
    this.firestore.doc('idea/' + policyId).delete();
  }
}
