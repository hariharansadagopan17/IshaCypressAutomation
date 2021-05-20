import {After} from "cypress-cucumber-preprocessor/steps";

After(function (scenarioResult) {
    const scenario = scenarioResult.scenario;
    console.log('SCENARIO EXECUTION COMPLETED:',scenario.name);
});

