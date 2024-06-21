const db = require('../config/db');
const Category = db.Category;
const statusCode = require('../utils/statusCode.json');

//Response
const { success, fail, message } = require('../helpers/response');


exports.findAll = async (req, res) => {

  try {

    await Category.findAll().then(category => {
      return res.status(statusCode.OK).json(success(category, "payload", "Category listed successfully"));
    }).catch(err => {
      return res.status(statusCode.NOT_FOUND).json('Categories not found');
    });

  } catch (err) {

    return res.status(statusCode.INTERNAL_SERVER_ERROR).json(fail("Error server. Error -> " + err));

  }

};


exports.create = async (req, res) => {

  try {

    const { gender, classCategory, weight } = req.body;

    const isValidAllFields = [gender, classCategory, weight].every(prop => prop !== "" && prop !== undefined && prop !== null);
    if (!isValidAllFields) return res.json(fail("All fields on the form must be filled in with values"));

    const newCategory = {
      gender: gender,
      classCategory: classCategory,
      weight: weight
    };

    // Category
    await Category.create(newCategory).then(data => {
      return res.status(statusCode.OK).json(success(data, "payload", "Category saved successfully"));

    }).catch(err => {

      return res.status(statusCode.BAD_REQUEST).json(fail("Fail to create category. Erro -> ", err));

    });

  } catch (err) {
    return res.status(statusCode.INTERNAL_SERVER_ERROR).fail("Error server. Error --> " + err);
  }

}


exports.update = async (req, res) => {

  try {

    let { idCategory } = req.params;
    const { gender, classCategory, weight } = req.body;

    let category = await Category.findByPk(idCategory);
    if (!category) return res.json(fail("Category not found to update"));

    let obj = {};
    if (gender) obj.gender = gender;
    if (classCategory) obj.classCategory = classCategory;
    if (weight) obj.weight = weight;

    if (Object.keys(obj).length != 0) Object.keys(obj).forEach(key => category[key] = obj[key]);

    await category.save().then(data => {
      return res.status(200).json(success(data, "payload", "Category updated successfully"))
    }).catch(err => {
      return res.status(500).json(fail("Fail to update category. Error => " + err.message));
    });

  } catch (err) {

    return res.status(statusCode.INTERNAL_SERVER_ERROR).fail("Error server. Error -> " + err);

  };

}

exports.delete = async (req, res) => {

  let { idCategory } = req.params;

  try {

    let category = await Category.findByPk(idCategory);

    if (category) {

      await Category.destroy({ where: { idCategory: idCategory } });
      res.status(200).json(message("Category deleted"));

    } else {

      res.status(404).json(fail("Category not found"));

    }
  } catch (err) {
    res.status(500).json(fail("Error server. Error =>  " + err));
  }

}



/*
const { Op } = require('sequelize');
Post.findAll({
  where: {
    [Op.and]: [{ authorId: 12 }, { status: 'active' }],
  },
});
*/

