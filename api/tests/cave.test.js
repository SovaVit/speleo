const request = require("supertest");

const app = require("../server");

describe("Cave", function() {
  let token;
  let data = {
    name: "Ozerna",
    typeCave: "qqqq",
    lengthCave: 450,
    address: "dddddddd",
    numberRegion: 1,
    square: 80,
    volume: 600,
    amplitude: 15,
    coordinateX: 10,
    coordinateY: 10,
    typeRock: "GGG",
    cadastralNumber: "FO",
    description: "ho",
    depthCave: 20,
    createdAt: "21-12-15"
  };
  beforeAll(done => {
    request(app)
      .post("/speleo/user/sign-in")
      .send({
        username: "bob",
        password: "bob"
      })
      .end((err, response) => {
        token = response.body.token; // save the token!
        done();
      });
  });
  it("get all", function(done) {
    request(app)
      .get("/speleo/cave")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("get one", function(done) {
    request(app)
      .get("/speleo/cave/5c95ea4025d9722c54e2a8df")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with 200 created", function(done) {
    request(app)
      .post("/speleo/cave/")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect("Content-Type", /json/)
      .expect(200, done);
  });

  it("respond with 405 validation error", function(done) {
    let data1 = {
      name: "Ozerna",
      typeCave: "qqqq",
      lengthCave: 450,
      address: "dddddddd",
      numberRegion: 1,
      square: 80,
      volume: 600,
      amplitude: 15,
      coordinateX: 10,
      coordinateY: 10,
      typeRock: "GGG",
      cadastralNumber: "FO",
      description: "ho",
      depthCave: 20
    };
    request(app)
      .post("/speleo/cave/")
      .set("Authorization", `Bearer ${token}`)
      .send(data1)
      .expect("Content-Type", /json/)
      .expect(405)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 401 unauthorized", function(done) {
    request(app)
      .post("/speleo/cave/")
      .set("Authorization", `Bearer ${1}`)
      .send(data)
      .expect("Content-Type", /json/)
      .expect(401)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
  it("update", function(done) {
    request(app)
      .patch("/speleo/cave/5cbb32d64e3c0024dceb599a")
      .set("Authorization", `Bearer ${token}`)
      .send(data)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
  it("delete", function(done) {
    request(app)
      .delete("/speleo/cave/5c95ea4025d9722c54e2a8df")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end(err => {
        if (err) return done(err);
        done();
      });
  });
});
