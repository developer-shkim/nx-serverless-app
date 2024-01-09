import { GetMyNestLibService } from './get-my-nest-lib.service';

describe('GetMyNestLibService', () => {
  it('should work', () => {
    expect(new GetMyNestLibService().getMyNestLib()).toEqual('MyNestLib');
  });
});
