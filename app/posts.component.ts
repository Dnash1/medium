import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { RouteParams } from '@angular/router-deprecated';

@Component({
	selector: 'my-posts',
	template: `<h3>Replies</h3>
	<ul *ngFor="let post of posts">
		<li>{{ post.subj }}</li>
    <li>{{ post.body }}</li>
	</ul>`
})

export class PostsComponent implements OnInit {
  posts: Post[];
  post: Post;
  constructor(
    private postService: PostService,
    private routeParams: RouteParams) { }
  ngOnInit() {
    let thread_id = +this.routeParams.get('thread_id');
    this.postService.getReplies(thread_id)
      .then(posts => this.posts = posts);
  }
}