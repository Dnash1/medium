import { Component, OnInit } from '@angular/core';
import { Thread } from './thread';
import { ThreadService } from './thread.service';
import { Router } from '@angular/router-deprecated';
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-threads',
	template: `<h3>Threads</h3>
	<ul *ngFor="let thread of threads">
		<li (click)="gotoThread(thread)">{{ thread.subj }}</li>
    <li>{{ thread.body }}</li>
	</ul>`
})

export class ThreadsComponent implements OnInit {
  threads: Thread[];
  thread: Thread;
  constructor(
    private router: Router,
    private threadService: ThreadService,
    private routeParams: RouteParams) { }
  ngOnInit() {
    let board_id = +this.routeParams.get('board_id');
    this.threadService.getCatalog(board_id)
      .then(threads => this.threads = threads);
  }
  gotoThread(thread: Thread) {
  let link = ['Posts', { thread_id: thread.id }];
  this.router.navigate(link);
  }
}