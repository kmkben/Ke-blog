import { Component, OnInit } from '@angular/core';
import { PostListItem } from '../models/post-list-item.model';
import { PostListItemService } from '../services/post-list-item.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postListItems!: PostListItem[];
  constructor(private postListItemService: PostListItemService) { }

  ngOnInit(): void {
    this.postListItems = this.postListItemService.getAllPostListItems();
  }

}
