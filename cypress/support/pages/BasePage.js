class BasePage {
  eyesValidate(params) {
    cy.eyesOpen({
      appName: params.appName,
      batchName: params.batchName,
      testName: params.testName
    });
  
    if (params.target != "region") {
      cy.eyesCheckWindow(params.testName);
    } else {
      cy.eyesCheckWindow({
        tag: params.testName,
        target: "region",
        selector: params.selector,
      });
    }
    cy.eyesClose();
  }
}

export default BasePage;