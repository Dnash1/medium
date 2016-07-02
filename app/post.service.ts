import { Injectable } from '@angular/core';
import { Post } from './post';
import { POSTS } from './mock-posts';
@Injectable()
export class PostService {
  getPosts() {
    return Promise.resolve(POSTS);
  }
  getReplies(thread_id: number) {
  return this.getPosts()
             .then(posts => posts.filter(post => post.thread_id === thread_id));
  }
}