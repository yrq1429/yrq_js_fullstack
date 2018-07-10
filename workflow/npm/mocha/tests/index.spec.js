const expect = require('chai').expect
const { add } = require('../index')

describe('hello-npm-script', () => {
  //方方面面都要考虑进去
  describe('#add', () => {
    it('should return sum when param are numbers', () => {
      expect(add(0, 1)).to.equal(1);
      expect(add(2, 3)).to.equal(5);
    })
    it('参数不合法的时候结果返回NAN', () => {
      expect(isNaN(add(2, '1'))).to.equal(true);
    })
  })
})