import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikes: number;
  @Input() postDate: Date;
  @Input() id: number;
  @Input() index: number;

  constructor(private postService: PostService) { }

  ngOnInit() {}

  getColor() {
    if(this.postLikes > +0) {
      return 'green';
    } else if(this.postLikes < +0) {
      return 'red';
    }else {
      return 'gray';
    }
  }

  like(){
      this.postService.like(this.index);
  }

  dislike(){
    this.postService.dislike(this.index);
  }

  loveItsPositifs(){
    return this.postLikes > 0;
  }
}