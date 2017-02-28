import { TestscaffPage } from './app.po';

describe('testscaff App', () => {
  let page: TestscaffPage;

  beforeEach(() => {
    page = new TestscaffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
