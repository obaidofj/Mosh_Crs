import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((posts) => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value };
    this.posts.splice(0, 0, post);
    // post['id'] = 101;
    // this.posts.splice(0, 0, post);

    this.service.create(post).subscribe(
      (newPost) => {
        post.id = newPost.id;
        // console.log(response.json());
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          // alert('This user taken');
        } else {
          throw error;
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe((updatedPost) => {
      console.log(updatedPost);
    });
    // this.http.put(this.url, JSON.stringify(post))
    //   .subscribe(response=>{console.log(response);})
  }
  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(345).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      } else {
        throw error;
      }
    });
  }
}
