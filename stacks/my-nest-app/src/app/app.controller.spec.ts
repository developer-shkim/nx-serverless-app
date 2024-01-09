import { Test, TestingModule } from '@nestjs/testing';
import { GetMyNestLibService, MyNestLibModule } from 'my-nest-lib';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [MyNestLibModule],
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: 'IGetMyNestLibService',
          useClass: GetMyNestLibService,
        },
      ],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Hello API"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
