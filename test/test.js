const chai = require("chai");
const expect = chai.expect;
const app = require("../index");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("User Route", () => {
  it("Should return an error if the user is not logged in", done => {
    chai.request(app)
      .get(`/api/user/account`)
      .end((err, res) => {
        expect(res.body.error).to.have.own.property("message");
        expect(res.body.error).to.have.own.property("status");
        expect(res.body.error.status).to.equal(403);
        done();
      });
  });
});

describe("YouTube API Route", () => {
  it("Should return data on the given YouTube Video Id", done => {
    const videoId = "Tq96cQvIsIA";

    chai.request(app)
      .get(`/api/youtube/api/${videoId}`)
      .end((err, res) => {
        const data = res.body.data.items[0];
        
        expect(data.id).to.equal(videoId);
        expect(data.snippet).to.have.own.property("title");
        expect(data.snippet).to.have.own.property("description");
        done();
      });
  });
});