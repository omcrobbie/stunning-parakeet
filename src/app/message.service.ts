import { interval, Subject, Subscription, take } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages: string[] = [];
  sub?: Subscription;
  onAdd = new Subject<string>();

  add(message: string) {
    this.messages.push(`${new Date().toTimeString()}: ${message}`);

    this.onAdd.next(message);
    this.sub?.unsubscribe();
    this.sub = interval(5000)
      .pipe(take(this.messages.length))
      .subscribe(() => this.messages.splice(0, 1));
  }
  shift() {
    this.messages.shift();
  }

  clear() {
    this.messages = [];
  }

  constructor() {}
}
