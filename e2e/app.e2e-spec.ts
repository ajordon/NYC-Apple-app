import { NycAppleAppPage } from './app.po';

describe('nyc-apple-app App', function() {
  let page: NycAppleAppPage;

  beforeEach(() => {
    page = new NycAppleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
