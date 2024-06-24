import { HttpException, HttpStatus } from '@nestjs/common';

interface Error {
  [k: string]: string;
}

export class NotFoundPostException extends HttpException {
  constructor(error: Error = {}) {
    super(
      {
        message: 'post not found',
        ...error,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
