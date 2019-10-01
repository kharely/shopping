const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

chai.use(chaiHttp)


describe('test1', ()=>{
  it('results differrent', (done)=>{
    chai.request(app)
      .post('/')
      .send({
        "pants" : 1,
        "hat": 1,
        "tshirt": 1
      })
      .end(function(err, res){
        chai.expect(err).to.be.null;
        chai.assert(res.body, 32.5)
        done()
  })
  })
})

describe('test2', ()=>{
  it('results differrent', (done)=>{
    chai.request(app)
      .post('/')
      .send({
        "pants" : 2,
        "hat": 0,
        "tshirt": 1
      })
      .end(function(err, res){
        chai.expect(err).to.be.null;
        chai.assert(res.body, 25)
        done()
  })
  })
})

describe('test3', ()=>{
  it('results differrent', (done)=>{
    chai.request(app)
      .post('/')
      .send({
        "pants" : 1,
        "hat": 0,
        "tshirt": 4
      })
      .end(function(err, res){
        chai.expect(err).to.be.null;
        chai.assert(res.body, 81)
        done()
  })
  })
})

describe('test4', ()=>{
  it('results differrent', (done)=>{
    chai.request(app)
      .post('/')
      .send({
        "pants" : 3,
        "hat": 1,
        "tshirt": 3
      })
      .end(function(err, res){
        chai.expect(err).to.be.null;
        chai.assert(res.body, 74.5)
        done()
  })
  })
})
