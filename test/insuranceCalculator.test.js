let chai = require("chai");
let expect = require("chai").expect;
let request = require("request");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

describe("Insurance cost calculator API", function () {
  describe("In the case of correct input: ", function () {
    it("It should return the correct insurance cost", function (done) {
      let array = {
        distances: [5, 25, 55, 105],
      };

      chai
        .request("http://localhost:3000")
        .post("/api")
        .send(array)
        .end((err, res) => {
          res.should.have.status(201);
          res.text.should.eql("891.5");
          done();
        });
    });
  });

  describe("In the case of incorrect input: ", function () {
    it("It should return a 500 status", function (done) {
      let array = {
        distances: [5, 25, 55, "non-number"],
      };

      chai
        .request("http://localhost:3000")
        .post("/api")
        .send(array)
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
