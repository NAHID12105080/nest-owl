import { Injectable } from '@nestjs/common';
import { Post } from './interfaces/post.interface';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Content of Post 1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Content of Post 2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }
  findOne(id: number): Post {
    const singlePost = this.posts.find((post) => post.id === id);
    if (!singlePost) {
      throw new Error(`Post with id ${id} not found`);
    }
    return singlePost;
  }
  create(createPostData: Omit<Post, 'id' | 'createdAt' | 'updatedAt'>): Post {
    const newPost: Post = {
      ...createPostData,
      id: this.posts.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(newPost);
    return newPost;
  }
  update(id: number, updatePostData: Partial<Post>): Post {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new Error(`Post with id ${id} not found`);
    }
    const updatedPost = {
      ...this.posts[postIndex],
      ...updatePostData,
      updatedAt: new Date(),
    };
    this.posts[postIndex] = updatedPost;
    return updatedPost;
  }
  delete(id: number): void {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new Error(`Post with id ${id} not found`);
    }
    this.posts.splice(postIndex, 1);
  }
}
