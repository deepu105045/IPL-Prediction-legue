import { IplPredictoinLeguePage } from './app.po';

describe('ipl-predictoin-legue App', () => {
  let page: IplPredictoinLeguePage;

  beforeEach(() => {
    page = new IplPredictoinLeguePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
