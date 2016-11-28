import { TrenujZeMnaPage } from './app.po';

describe('trenuj-ze-mna App', function() {
  let page: TrenujZeMnaPage;

  beforeEach(() => {
    page = new TrenujZeMnaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
