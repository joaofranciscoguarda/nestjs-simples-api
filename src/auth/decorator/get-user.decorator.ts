import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Get de user from jwt and add a user to request
export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest();

    if (data) {
      return request.user[data];
    }
    return request.user;
  },
);
