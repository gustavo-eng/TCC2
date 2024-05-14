const db = require('../config/db');
const Category = db.Category;

//Response
const { success, fail, message } = require('../helpers/response');

const Op = db.Sequelize.Op;




exports.findAll = async (req, res) => {
  console.log("entrou no controller findAll --> ")
  await Category.findAll().then(category => {
    return res.status(200).json(success(category, "payload", "Categoria lista com sucesso"));
  }).catch(err => {
    return res.status(404).json('Categories not found');
  });
};


exports.create = async (req, res) => {

  const { gender, classCategory, weight } = req.body;

  const isValidAllFields = [gender, classCategory, weight].every(prop => prop !== "" && prop !== undefined && prop !== null);
  if (!isValidAllFields) return res.json(fail("All fields on the form must be filled in with values"));

  // TODO Zod


  const newCategory = {
    gender: gender,
    classCategory: classCategory,
    weight: weight
  };

  // Category
  await Category.create(newCategory).then(data => {
    console.log('Categoria salva com sucesso ')
    res.status(200).json(success(data, "payload", "Category saved successfully"));
  }).catch(err => {
    console.log('Erro -> ' + err)
    res.status(500).json(fail("Fail to create category. Erro -> ", err));
  });
  //await Category.
}


exports.update = async (req, res) => {

  let { idCategory } = req.params;
  const { gender, classCategory, weight } = req.body;

  let category = await Category.findByPk(idCategory);
  if (!category) return res.json(fail("Category not found to update"));

  let obj = {};
  if (gender) obj.gender = gender;
  if (classCategory) obj.classCategory = classCategory;
  if (weight) obj.weight = weight;

  if (Object.keys(obj).length === 0) {
    return res.status(500).json(fail("Modify at least one field!"));
  };

  Object.keys(obj).forEach(key => category[key] = obj[key])
  await category.save().then(data => {
    console.log("saving")
    return res.status(200).json(success(data, "payload", "Category updated successfully"))
  }).catch(err => {
    return res.status(500).json(fail("Fail to update category. Error => " + err.message));
  });

}



exports.delete = async (req, res) => {

  let { idCategory } = req.params;

  try {

    let category = await Category.findByPk(idCategory);
    if (category) {
      await Category.destroy({ where: { idCategory: idCategory } });
      res.status(200).json(message("Category deleted"));
    } else {
      res.stats(404).json(fail("Category not found"));
    }
  } catch (err) {
    res.status(500).json(fail("Error server. Error =>  " + err));
  }

}


/*

// Delete everyone named "Jane"
await User.destroy({
  where: {
    firstName: 'Jane',
  },
});
*/

/*
exports.delete = async () => {

};
*/



/*
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
*/











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