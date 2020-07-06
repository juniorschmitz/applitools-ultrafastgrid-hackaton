### Applitools 2020 Ultrafastgrid Hackaton

Using Cypress for this Hackaton version, in the project the three main tasks to automate were automated:
1. Task1: Verifying the main Hackaton page project with many different browser sizes;
2. Task2: Verifying the filtering for products feature, where the test filters for black shoes and verify that only two are presented on the page;
3. Task3: Verifying the Product Page, acessing after filtering for products on the main page.

For this contest, i used Cypress (mainly for learning purposes), the Page Object pattern was adopted but its potential was not fully used, since for this contest there are not many interations or elements for mapping.

For running the full regression with the three automated tasks with the V1 App, one should:

```
npm run regressionv1
```

For running the full regression with the three automated tasks with the V2 App, one should:

```
npm run regressionv2
```

For running each task individually, if one desires, one should:
```
npm run test<1, 2, 3>v<1, 2>
```

If you have any questions, feel free to contact me.
