import { GuitarhackPage } from './app.po';

describe('guitarhack App', () => {
  let page: GuitarhackPage;

  beforeEach(() => {
    page = new GuitarhackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
