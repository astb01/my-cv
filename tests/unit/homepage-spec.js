const cheerio = require("cheerio");
const chai = require("chai");
const chaiHttp = require("chai-http");
// eslint-disable-next-line prefer-destructuring
const expect = chai.expect;

chai.use(chaiHttp);

const app = require("../../app");

describe("Homepage", () => {
  let response;
  let $;

  beforeEach(async () => {
    response = await chai.request(app).get("/");
    // eslint-disable-next-line no-unused-expressions
    expect(response).to.not.be.null;

    $ = cheerio.load(response.text);
  });

  it("Should display individuals name", async () => {
    const personsName = $("h1.mb-0");
    expect(personsName).to.not.be.null;
  });

  it("Should contain an image for the profile", () => {
    const image = $("span.at-img");
    expect(image).not.to.be.null;
  });
});
