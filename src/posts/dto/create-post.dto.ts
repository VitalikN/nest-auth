import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: ' title обов`язкове поле ' })
  title: string;

  @IsString({ message: ' description обов`язкове поле ' })
  description: string;

  @IsString({ message: ' author обов`язкове поле ' })
  author: string;
}
