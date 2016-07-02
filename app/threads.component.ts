import { Component, OnInit } from '@angular/core';
import { Thread } from './thread';
import { ThreadService } from './thread.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-threads',
	template: `<h3>Threads</h3>
	<ul *ngFor="let thread of threads">
		<li>{{ thread.subj }}</li>
    <li>{{ thread.body }}</li>
	</ul>`
})

export class ThreadsComponent implements OnInit {
  threads: Thread[];
  thread: Thread;
  constructor(
    private threadService: ThreadService,
    private routeParams: RouteParams) { }
  // getThreads() {
  //   this.threadService.getThreads().then(threads => this.threads = threads);
  // }
  ngOnInit() {
    let board_id = +this.routeParams.get('board_id');
    this.threadService.getCatalog(board_id)
      .then(threads => this.threads = threads);
  }
}