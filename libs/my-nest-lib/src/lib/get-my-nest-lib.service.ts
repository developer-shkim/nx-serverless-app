import { Injectable } from '@nestjs/common';

@Injectable()
export class GetMyNestLibService {
  getMyNestLib() {
    return 'MyNestLib';
  }
}
