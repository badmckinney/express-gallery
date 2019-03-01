const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

describe('Express Gallery Server', () => {
  let server;

  describe('/home', () => {
    describe('GET', () => {
      beforeEach(() => {
        delete require.cache[require.resolve('../server')];
        server = require('../server');
      });

      afterEach((done) => {
        server.close(done);
      });

      it('should respond to "/" route', (done) => {
        request(server)
          .get('/')
          .set('Accept', 'text/html')
          .expect((res) => {
            res.body.length > 0;
          })
          .expect(200, done);
      });

      it('should respond to "/login" route', (done) => {
        request(server)
          .get('/login')
          .set('Accept', 'text/html')
          .expect((res) => {
            res.body.length > 0;
          })
          .expect(200, done);
      });

      it('should respond to "/register" route', (done) => {
        request(server)
          .get('/register')
          .set('Accept', 'text/html')
          .expect((res) => {
            res.body.length > 0;
          })
          .expect(200, done);
      });

      it('should redirect "/logout" route to "/login" route', (done) => {
        request(server)
          .get('/logout')
          .set('Accept', 'text/html')
          .expect((res) => {
            res.body.length > 0;
          })
          .expect(200, done);
      });
    });
  });
});