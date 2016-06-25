import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { THREADS } from './mock-threads';
@Injectable()
export class ThreadService {
  getThreads() {
    return Promise.resolve(THREADS);
  }
  getThread(board_id: number) {
  return this.getThreads()
             .then(threads => threads.filter(thread => thread.board_id === board_id)[0]);
  }
}