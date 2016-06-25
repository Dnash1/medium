import { Injectable } from '@angular/core';
import { Board } from './board';
import { BOARDS } from './mock-boards';
@Injectable()
export class BoardService {
  getBoards() {
    return Promise.resolve(BOARDS);
  }
}