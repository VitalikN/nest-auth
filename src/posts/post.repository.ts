import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDo } from 'src/_schemas/post.do';
import { UpdatePostDto } from './dto/update-post.dto';
import { NotFoundPostException } from 'src/exceptions/not-found-exception.exception';

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
  async findOne(id: string): Promise<any> {
    const findOne = await this.postModel.findById(id);
    if (!findOne) {
      throw new NotFoundPostException();
    }

    return findOne;
  }

  async updateOne(id: string, updatePostDto: UpdatePostDto): Promise<any> {
    const updateOne = await this.postModel.findByIdAndUpdate(
      id,
      updatePostDto,
      { new: true },
    );
    if (!updateOne) {
      throw new NotFoundPostException();
    }

    return updateOne;
  }

  async deleteOne(id: string): Promise<any> {
    const deleteOne = await this.postModel.findByIdAndDelete(id);
    if (!deleteOne) {
      throw new NotFoundPostException();
    }

    return deleteOne;
  }
}
