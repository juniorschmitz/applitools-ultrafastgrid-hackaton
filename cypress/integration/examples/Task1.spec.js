import HomePage from '../../support/pages/HomePage';
const url = Cypress.env('v2') ? 'gridHackathonV2.html' : 'gridHackathonV1.html'
const homePage = new HomePage();

describe("Task 1", () => {
  it(`Cross-Device Elements Test`, function () {
    homePage.visit(url);
    homePage.eyesValidate({ appName: 'gridHackaton', testName: this.test.title, batchName: 'UFG Hackathon' })
  });
});
