const { describe } = require("mocha");
const homepage = require("../pageobjects/homepage");

describe("This is the discribe block", function () {
  this.timeout(50000);
  beforeEach(function () {});

  this.afterEach(function () {});

  it("POMtest", function () {
    // var baseurl = 'https://www.ornikar.com/assurance-auto'
    var baseurl = "https://www.google.com";
    homepage.go_to_url(baseurl);
    homepage.enter_search("QA underground");
  });
});
