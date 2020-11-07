const request = require('supertest')

const app = require('../app');

const UserModel = require('../models/user.model');
const db = require('../sequelizeModels/config.sequelizeModels');

describe('/user', () => {
  const github_id = 12345;
  const username = 'username';
  const profile_url = 'http://url';
  beforeAll(async() => {
    await db.sync({ force: true });
    await UserModel.createUser({ github_id, username, profile_url })
    await UserModel.createUser({ github_id: 1, username, profile_url })
  })

  afterAll(async() => {
    await db.close();
  })

  describe('GET /', () => {
    it('returns datas of users', async() => {
      const { body, status } = await request(app)
        .get('/user')
      expect(body.length).toBe(2);
      expect(status).toBe(200);
      expect(body[0].github_id).toBe(12345);
      expect(body[1].github_id).toBe(1);
    })
  })
})