import { BigDataToolPage } from './app.po';

describe('big-data-tool App', () => {
  let page: BigDataToolPage;

  beforeEach(() => {
    page = new BigDataToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
