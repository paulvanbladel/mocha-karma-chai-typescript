import { assert, expect } from 'chai';
import  * as mocha from 'mocha'
import * as  chai from 'chai';

let chaihttp= require('chai-http')
chai.use(chaihttp);

describe('Patients get', function () {
  it('should return all patients', function (done) {
    let url = "http://localhost:8888/api"
    
    chai.request(url).get('/patients').end((err, res)=>{
      assert.isNull(err);
      
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
});