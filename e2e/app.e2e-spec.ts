import { TpOpenClassroomPage } from './app.po';

describe('simple-blog-app App', () => {
  let page: TpOpenClassroomPage;

  beforeEach(() => {
    page = new TpOpenClassroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
