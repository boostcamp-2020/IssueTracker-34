const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env'

require('dotenv').config({ path: envFile });
require('../sequelizeModels/index');
const UserModel = require('./user.model');
const db = require('../sequelizeModels/config.sequelizeModels');

describe('UserModel', () => {
  const github_id = 12345;
  const username = 'username';
  const profile_url = 'http://url';
  beforeAll(async() => {
    await db.sync({ force: true });
  })

  afterAll(async() => {
    await db.close();
  })

  describe('findAllUser', () => {
    describe('without any data', () => {
      it('should return an empty array', async() => {
        const data = await UserModel.findAllUser();
        expect(Array.isArray(data)).toBe(true);
        expect(data[0]).toBeUndefined();
      })
    })

    describe('with datas', () => {
      beforeEach(async() => {
        await UserModel.createUser({ github_id, username, profile_url })
        await UserModel.createUser({ github_id: 1, username, profile_url })
      })
      it('should return datas of users', async() => {
        const data = await UserModel.findAllUser();
        expect(data.length).toBe(2);
      })
    })
  })

  describe('findUser', () => {
    describe('without matching github id', () => {
      it('should return an empty array', async() => {
        const data = await UserModel.findUser({ github_id: 5555 });
        expect(data).toBe(null);
      })
    })

    describe('with matching github id', () => {
      beforeEach(async() => {
        await UserModel.createUser({ github_id, username, profile_url })
        await UserModel.createUser({ github_id: 1, username, profile_url })
      })
      it('should return data of the user', async() => {
        const data = await UserModel.findUser({ github_id });
        expect(data.dataValues.github_id).toBe(github_id);
        expect(data.dataValues.name).toBe(username);
        expect(data.dataValues.profile_url).toBe(profile_url);
      })
    })
  })
})
