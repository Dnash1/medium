import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { BoardService } from './board.service';

@Component({
  selector: 'my-boards',
  template: `<h2>Boards</h2>
  <ul>
  <li *ngFor="let board of boards">
  	<p>{{board.id}}</p>
  	<p>{{board.name}}</p>
  </li>
  </ul>`
})
export class BoardsComponent implements OnInit {
  boards: Board[];
  constructor(
    private boardService: BoardService) { }
  getBoards() {
    this.boardService.getBoards().then(boards => this.boards = boards);
  }
  ngOnInit() {
    this.getBoards();
  }
}