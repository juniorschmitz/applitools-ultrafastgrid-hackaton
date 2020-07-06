import HomePage from '../../support/pages/HomePage';
const url = Cypress.env('v2') ? 'gridHackathonV2.html' : 'gridHackathonV1.html'
const homePage = new HomePage();

describe("Task 2", () => {
    it(`Filter Results`, function () {
        homePage.visit(url);
        homePage.filterByColor();
        homePage.eyesValidate({ appName: 'gridHackaton', testName: this.test.title, batchName: 'UFG Hackathon', target: 'region', selector: '#product_grid' })
    });
});