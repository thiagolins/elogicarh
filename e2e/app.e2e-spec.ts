import { ElogicaRHPage } from './app.po';

describe('elogica-rh App', () => {
  let page: ElogicaRHPage;

  beforeEach(() => {
    page = new ElogicaRHPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
