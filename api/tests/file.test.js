const request = require("supertest");

const app = require("../server");
describe("Expedition", function(){
    let token;
  
    beforeAll((done) => {
      request(app)
        .post('/speleo/user/sign-in')
        .send({
          username: "bob",
          password: "bob",
        })
        .end((err, response) => {
          token = response.body.token; // save the token!
          done();
        });
    });
    it("get all", function(done) {
  
        request(app)
          .get("/speleo/photo")
          .set("Accept", "application/json")
          .expect("Content-Type", /json/)
          .expect(200, done);
      });
      it('respond with 200 created', function (done) {
        let data = new FormData();
        request(app)
            .post('/speleo/photo/')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
            .expect('Content-Type', /json/)
            .expect(200, done)
            
    });
    it('delete', function(done){
        request(app)
        .delete('/speleo/photo/5cd937ecafa16d2e3892b4f8')
        .set('Authorization', `Bearer ${token}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
      });
      })
});