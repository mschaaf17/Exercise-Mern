const { User } = require('../models');
const { faker } = require('@faker-js/faker');

function generateData() {
  let dataArray = [];
  for (let i = 0; i <= 20; i++) {
    dataArray.push(
      //  add JSON strings to avoid duplicate
      JSON.stringify({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: '12345',
      })
    );
  }
  return [...new Set(dataArray)].map(el => JSON.parse(el));
}

const seedUsers = async () => {
  await User.deleteMany();

  const userSeeds = generateData();
  await User.create(userSeeds);
};

module.exports = seedUsers;
