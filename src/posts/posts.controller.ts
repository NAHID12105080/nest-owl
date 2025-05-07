import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { Post as PostInterface } from './interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  findAll(@Query('search') search?: string): PostInterface[] {
    const extractAllPosts = this.postsService.findAll();
    if (search) {
      return extractAllPosts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return extractAllPosts;
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): PostInterface {
    return this.postsService.findOne(id);
  }
  @Post()
  create(
    @Query('title') title: string,
    @Query('content') content: string,
  ): PostInterface {
    return this.postsService.create({ title, content });
  }
  @Post(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Query('title') title: string,
    @Query('content') content: string,
  ): PostInterface {
    return this.postsService.update(id, { title, content });
  }
  @Post(':id/delete')
  delete(@Param('id', ParseIntPipe) id: number): void {
    this.postsService.delete(id);
  }
}
