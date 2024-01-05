import { Controller, Get, Inject } from '@nestjs/common';

import { AppService } from './app.service';
import { IGetMyNestLibService } from './get-my-nest-lib.service.interface';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('IGetMyNestLibService')
    private readonly getMyNestLibService: IGetMyNestLibService
  ) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/my-nest-lib')
  getMyNestLib() {
    return this.getMyNestLibService.getMyNestLib();
  }
}
