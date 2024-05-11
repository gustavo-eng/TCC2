const db = require('../config/db');
const Category = db.Category;

const Op = db.Sequelize.Op;




/*
const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.and]: [{ authorId: 12 }, { status: 'active' }],
  },
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';

*/