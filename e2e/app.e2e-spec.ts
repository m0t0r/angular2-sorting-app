import { Angular2SortingAppPage } from './app.po';

describe('angular2-sorting-app App', function() {
  let page: Angular2SortingAppPage;

  beforeEach(() => {
    page = new Angular2SortingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
