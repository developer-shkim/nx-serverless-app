import { helloLib } from './hello-lib';

describe('helloLib', () => {
  it('should work', () => {
    expect(helloLib()).toEqual('hello-lib');
  });
});
