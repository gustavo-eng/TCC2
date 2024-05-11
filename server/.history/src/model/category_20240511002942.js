const { DataTypes } = require('sequelize');
module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("Category", {
        idCategory: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        gender: {
            type: DataTypes.STRING,
            defaultValue: "Masculino",
            allowNull: true
        },
        classCategory: {
            type: DataTypes.STRING,
            defaultValue: "Senior",
            allowNull: true
        },
        weight: {
            type: DataTypes.INTEGER,
            //defaultValue: 60,
            allowNull: true
        }
    });

    return Category;
}

/*
const CategoryModel = sequelize.define('Categoria', {
    id_Categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender: {
        type: DataTypes.STRING,
        defaultValue: "Masculino",
        allowNull: true
    },
    classAge: {
        type: DataTypes.STRING,
        defaultValue: "Senior",
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        defaultValue: 60,
        allowNull: true
    }


}, {
    freezeTableName: true,
    createdAt: true,
    updatedAt: true,
}

);

CategoryModel.sync();


module.exports = {
    list: async () => {
        const categories = await CategoryModel.findAll();
        return categories;
    },
    save: async (gender, classAge, weight) => {
        const category = CategoryModel.create({
            gender: gender,
            class_age: classAge,
            weight: weight
        });

        return category
    },
    findSpecific: (id) => {
        return CategoryModel.findByPk(id);
    },
    update: async (id, obj) => {
        let category = await CategoryModel.findByPk(id);
        if (!category) return false;
        Object.keys(obj).forEach(key => category[key] = obj[key]);
        await category.save();
        return category;

    },
    delete: async (id) => {
        await CategoryModel.destroy({ where: { id_Categoria: id } });
    },


}
*/