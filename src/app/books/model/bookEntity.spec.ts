import { BookEntity } from './bookEntity';

describe('BookEntity', () => {
  it('should create an instance', () => {
    expect(new BookEntity(1, 'test', 'test', 1)).toBeTruthy();
  });
});
