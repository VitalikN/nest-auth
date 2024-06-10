import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/_schemas/post.do';

export class PostsRepository {
  constructor(
    @InjectModel('Post')
    private postModel: Model<PostDo>,
  ) {}
  async createOne(post: PostDo): Promise<PostDo> {
    const createOne = await this.postModel.create(post);
    return createOne;
  }
  async findAll(): Promise<any> {
    const findAll = await this.postModel.find();
    return findAll;
  }
}
