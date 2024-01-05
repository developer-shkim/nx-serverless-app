import { Module } from '@nestjs/common';
import { GetMyNestLibService, MyNestLibModule } from 'my-nest-lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MyNestLibModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'IGetMyNestLibService',
      useClass: GetMyNestLibService,
    },
  ],
})
export class AppModule {}
