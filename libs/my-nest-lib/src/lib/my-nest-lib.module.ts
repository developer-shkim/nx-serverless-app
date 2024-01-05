import { Module } from '@nestjs/common';
import { GetMyNestLibService } from './get-my-nest-lib.service';

@Module({
  controllers: [],
  providers: [GetMyNestLibService],
  exports: [GetMyNestLibService],
})
export class MyNestLibModule {}
