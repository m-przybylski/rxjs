import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class ChatService {

  constructor(private db: AngularFireDatabase) {
    db.list('messages')
      .snapshotChanges()
      .subscribe((x) => {
        console.log(x)
      });
  }
}

export interface Message {
  id: string,
  timestamp: Date,
  user: string,
}
