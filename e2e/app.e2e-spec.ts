import { FproPage } from './app.po';

describe('fpro App', () => {
  let page: FproPage;

  beforeEach(() => {
    page = new FproPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
