import { assert, expect } from 'chai';
import  * as mocha from 'mocha'
import * as  chai from 'chai';

let chaihttp= require('chai-http')
chai.use(chaihttp);

describe('Patients get', function () {
  it.skip('should return all patients', function (done) {
    let url = "http://localhost:8888/api"
    
    chai.request(url).get('/patients').end((err, res)=>{
      assert.isNull(err);
      console.log(res);
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.body[0].firstName).to.equal('paul')
      done();
    });
  });
});