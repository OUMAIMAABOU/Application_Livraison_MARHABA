const supertest = require('supertest')
const app = require('../app');
describe('Lgin function', () => {
  it('login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "oumaimaabouOtam@gmail.com",
        password: "OUMA",
      })
    expect(res.statusCode).toEqual(200)
  })
})


  
