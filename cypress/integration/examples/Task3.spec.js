import HomePage from '../../support/pages/HomePage';
const url = Cypress.env('v2') ? 'gridHackathonV2.html' : 'gridHackathonV1.html'
const homePage = new HomePage();

describe("Task 3", () => {
    it(`Product Details Test`, function () {
        homePage.visit(url);

        homePage.accessProductPage();
        homePage.eyesValidate({ appName: 'gridHackaton', testName: this.test.title, batchName: 'UFG Hackathon' })
    });
});