import { Component } from '@angular/core';
import { BoardsComponent } from './boards.component';
import { BoardService } from './board.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <my-boards></my-boards>`,
  directives: [ BoardsComponent ],
  providers: [ BoardService ]
})
export class AppComponent {
	title = 'Medium';
}