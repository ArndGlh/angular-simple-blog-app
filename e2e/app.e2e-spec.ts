import { TpOpenClassroomPage } from './app.po';

describe('tp-open-classroom App', () => {
  let page: TpOpenClassroomPage;

  beforeEach(() => {
    page = new TpOpenClassroomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
