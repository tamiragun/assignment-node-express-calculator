const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

//Test to ensure that the calculator API is working
describe("Insurance cost calculator API", function () {
  //Testing with a given array of numbers
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

  //Testing with an array containing an incorrect input
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
