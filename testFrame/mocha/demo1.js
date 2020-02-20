// node 自带的断言库
var assert = require('assert');

// chai 断言库
const expect = require('chai').expect // 引入Chai

const add=require('./add')

// 测试套件
describe('Array', function() {
  describe('#indexOf()', function() {
    // 测试用例（测试函数）
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(4)).to.equal(-1);
    });
  });
  
  //可以使用代码动态生成多个测试用例
  describe('add', function() {
    var tests=[
      {arg:[1,2],res:3},
      {arg:[3,4],res:7}
    ]

    tests.forEach(a=>{
      it('ok',function(){
        assert.equal(add(...a.arg),a.res);
      })
    })
  });
});
