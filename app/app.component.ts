import { Component } from '@angular/core';
import { BoardsComponent } from './boards.component';
import { BoardService } from './board.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { ThreadsComponent } from './threads.component';
import { ThreadService } from './thread.service';
import { PostsComponent } from './posts.component';
import { PostService } from './post.service';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS, BoardService, ThreadService, PostService ]
})

@RouteConfig([
  {
  path: '/boards',
  name: 'Boards',
  component: BoardsComponent,
  useAsDefault: true
  },
  {
  path: '/:board_id/catalog',
  name: 'Threads',
  component: ThreadsComponent
  },
  {
  path: '/posts/:thread_id',
  name: 'Posts',
  component: PostsComponent
  }
])

export class AppComponent {
	title = 'Medium';
}