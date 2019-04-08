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
    .get("/speleo/expedition")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200, done);
});


  it("get one", function(done) {
    request(app)
      .get("/speleo/expedition/5c95ea4025d9722c54e2a8df")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)

  })
  it('respond with 200 created', function (done) {
    let data = {
      name: "Test",
      numberExpedition: 241521,
      description: "text",
      createdAt: "1995-12-17T03:24:00",
      caveId: "5c20b35a2cf8ea0bf133aa2e",
      photoId: "5c20b35a2cf8ea0bf133aa2e"
  }
    request(app)
        .post('/speleo/expedition/')
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200, done)
        
});
it('respond with 405 not created', function (done) {
  let data = {
    
    numberExpedition: 241521,
    description: "text",
    createdAt: "1995-12-17T03:24:00",
    caveId: "5c20b35a2cf8ea0bf133aa2e",
    photoId: "5c20b35a2cf8ea0bf133aa2e"
}
  request(app)
      .post('/speleo/expedition/')
      .send(data)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/)
      .expect(405)
      //.expect('"Should by body"')
      .end((err) => {
          if (err) return done(err);
          done();
      });
    })
      it('update', function (done) {
        let data = {
          name: "rem",
          numberExpedition: 241521,
          description: "text",
          createdAt: "1995-12-17T03:24:00",
          caveId: "5c20b35a2cf8ea0bf133aa2e",
          photoId: "5c20b35a2cf8ea0bf133aa2e"
      }
        request(app)
            .patch('/speleo/expedition/5c95eea951ec0a0b1079bad9')
            .send(data)
            .set('Authorization', `Bearer ${token}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });

});
it('delete', function(done){
  request(app)
  .delete('/speleo/expedition/5c95ea4025d9722c54e2a8df')
  .set('Authorization', `Bearer ${token}`)
  .expect("Content-Type", /json/)
  .expect(200)
  .end((err) => {
    if (err) return done(err);
    done();
});
})
});
