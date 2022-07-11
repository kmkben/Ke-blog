import { Component, Input, OnInit } from '@angular/core';
import { PostListItem } from '../models/post-list-item.model';
import { PostListItemService } from '../services/post-list-item.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postListItem!: PostListItem;

  constructor(private postListItemService: PostListItemService) { }

  ngOnInit(): void {
  }

}
