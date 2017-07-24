import { AngularAndDynamicD3jsGraphPage } from './app.po';

describe('angular-and-dynamic-d3js-graph App', () => {
  let page: AngularAndDynamicD3jsGraphPage;

  beforeEach(() => {
    page = new AngularAndDynamicD3jsGraphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
