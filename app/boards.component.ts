import { Component, OnInit } from '@angular/core';
import { Board } from './board';
import { BoardService } from './board.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'my-boards',
  template: `
  <nav *ngFor="let board of boards">
  	<p (click)="gotoCatalog(board)">{{ board.name }}</p>
  </nav>`
})
export class BoardsComponent implements OnInit {
  boards: Board[];
  board: Board;
  constructor(
  	private router: Router,
    private boardService: BoardService) { }
  getBoards() {
    this.boardService.getBoards().then(boards => this.boards = boards);
  }
  ngOnInit() {
    this.getBoards();
  }
  gotoCatalog(board: Board) {
  let link = ['Threads', { board_id: board.board_id }];
  this.router.navigate(link);
  }
}