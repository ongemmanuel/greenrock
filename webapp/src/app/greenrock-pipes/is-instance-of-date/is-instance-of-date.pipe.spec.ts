import { IsInstanceOfDatePipe } from './is-instance-of-date.pipe';

describe('IsInstanceOfDatePipe', () => {
  it('create an instance', () => {
    const pipe = new IsInstanceOfDatePipe();
    expect(pipe).toBeTruthy();
  });
});
