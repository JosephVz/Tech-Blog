const sequelize = require('../config/connection');
const { Blog, User } = require('../models');

const userData = require('./userData.json');
const blogData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
    });
  }

  for (const comments of commentsData) {
    await comments.create({
      ...comments,
    })
  }
  process.exit(0);
};

seedDatabase();
