const db = require('../config/db');
const Category = db.Category;

//Response
const { success, fail } = require('../helpers/response');

const Op = db.Sequelize.Op;


exports.findAll = async (req, res) => {
    console.log('dentro do controller categoryControlleer.js');
    await Category.findAll().then(category => {
        return res.status(200).json(success(category, "payload", "Categoria lista com sucesso"));
    }).catch(err => {
        return res.status(404).json('Categories not found');
    });
}


/*
const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.and]: [{ authorId: 12 }, { status: 'active' }],
  },
});
// SELECT * FROM post WHERE authorId = 12 AND status = 'active';

*/

/*
list: async () => {
    const categories = await CategoryModel.findAll();
    return categories;
},
*/