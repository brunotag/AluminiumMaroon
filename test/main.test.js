import alexaTest from 'alexa-skill-test-framework';

// initialize the testing framework
alexaTest.initialize(
  require('../src/main.js'), "amzn1.ask.skill.27c671b8-dcb8-4a9f-9e81-5441859ae3b6", "amzn1.ask.account.VOID");

describe("Hello World Skill", function () {
  // tests the behavior of the skill's LaunchRequest
  describe("LaunchRequest", function () {
    alexaTest.test([
      {
        request: alexaTest.getLaunchRequest(),
        says: "Hello", repromptsNothing: true, shouldEndSession: true
      }
    ]);
  });
});
