import { merge, mergeWith, repeat, Subscription } from 'rxjs';
import { MessagesService } from './../message.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, OnDestroy {
  timer?: NodeJS.Timer;
  sub?: Subscription;
  constructor(
    public messageService: MessagesService,
    private snackBar: MatSnackBar
  ) {}

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.sub?.unsubscribe();
  }

  ngOnInit(): void {
    this.messageService.onAdd.subscribe((message: string) =>
      this.snackBar.open(message, undefined, { duration: 3000 })
    );
  }

  setTimer() {
    const messages = this.messageService.messages;
    if (messages.length === 1) {
      this.snackBar.open(messages[messages.length - 1]);
    }
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.messageService.shift();
        if (messages.length) {
          this.snackBar.open(messages[messages.length - 1]);
        } else {
          this.snackBar.dismiss();
          clearInterval(this.timer);
          this.timer = undefined;
        }
      }, 3000);
    }
  }
}
