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
      .get("/speleo/expedition/5ca5d0b4d55e2536e0a5131f")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)

  })
  it('respond with 200 created', function (done) {
    let data = {
      numberExpedition: 241521,
      description: "text",
      dateExpedition: "1995-12-17T03:24:00",
      caveName: "5c20b35a2cf8ea0bf133aa2e"
     
  }
    request(app)
        .post('/speleo/expedition/')
        .set('Authorization', `Bearer ${token}`)
        .send(data)
        .expect('Content-Type', /json/)
        .expect(200, done)
        
});
it('respond with 405 validation error', function (done) {
  let data = {
    
    description: "text",
    dateExpedition: "1995-12-17T03:24:00",
    caveName: "5c20b35a2cf8ea0bf133aa2e"
   
}
  request(app)
      .post('/speleo/expedition/')
      .set('Authorization', `Bearer ${token}`)
      .send(data)
      .expect('Content-Type', /json/)
      .expect(405)
      .end((err) => {
          if (err) return done(err);
          done();
      });
    })
    it('respond with 401 unauthorized', function (done) {
      let data = {
        
        description: "text",
        dateExpedition: "1995-12-17T03:24:00",
        caveName: "5c20b35a2cf8ea0bf133aa2e"
       
    }
      request(app)
          .post('/speleo/expedition/')
          .set('Authorization', `Bearer ${1}`)
          .send(data)
          .expect('Content-Type', /json/)
          .expect(401)
          .end((err) => {
              if (err) return done(err);
              done();
          });
        })
it('update', function (done) {
        let data = {
          numberExpedition: 241521,
          description: "<p>text</p>",
          dateExpedition: "1995-12-17T03:24:00",
          caveName: "5c20b35a2cf8ea0bf133aa2e"
         
      }
        request(app)
            .patch('/speleo/expedition/5ca5d0b4d55e2536e0a5131f')
            .set('Authorization', `Bearer ${token}`)
            .send(data)
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
