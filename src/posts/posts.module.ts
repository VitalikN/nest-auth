import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostSchema, Post } from 'src/_schemas/post.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    PostsModule,
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
