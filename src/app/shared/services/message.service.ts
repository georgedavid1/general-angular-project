import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private behaviorSubject$ = new BehaviorSubject<any>('here I am!');
  constructor() { }

  sendMessage(message: string) {
    this.behaviorSubject$.next(message);
  } 

  clearMessages(){
    this.behaviorSubject$.next('clear messages clicked');
  }

  getMessage(): Observable<any> {
    return this.behaviorSubject$.asObservable();
  }
}
