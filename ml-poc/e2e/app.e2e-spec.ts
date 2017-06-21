import { TimeAppPage } from './app.po';

describe('time-app App', () => {
  let page: TimeAppPage;

  beforeEach(() => {
    page = new TimeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
