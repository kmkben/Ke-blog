import { Injectable } from "@angular/core";
import { PostListItem } from "../models/post-list-item.model";

@Injectable({
    providedIn: 'root'
})

export class PostListItemService {
    postListItems: PostListItem[] =[
        {
            //id: 1,
            title: "Mboudi's story",
            content: "This is a story of my love Mboudi. It is amezing story.",
            like: 2,
            created_at: new Date
        },
        {
            //id: 2,
            title: "My First item",
            content: "this is my first item hahaha it's funny",
            like: 0,
            created_at: new Date
        },
        {
            //id: 3,
            title: "My Second item",
            content: "this is my second item hahaha it's funny",
            like: 1,
            created_at: new Date
        }
    ];

    getAllPostListItems(): PostListItem[] {
        return this.postListItems;
    }

    /*getPostListItemById(postListItemId: number): PostListItem {
        const postListItem = this.postListItems.find(postListItem => postListItem.id == postListItemId);

        if (!postListItem) {
            throw new Error("Item not found");
        } else {
            return postListItem
        }
    }*/
}