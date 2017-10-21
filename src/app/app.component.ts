import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
  `,
  styles: [],
})
export class AppComponent {
  public title = 'app';

  constructor(private chat: ChatService) {
  }
}
