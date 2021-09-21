const Category = require("../models/Category.model");

module.exports.categoryController = {
  createCategory: async (req, res) => {
    try {
      await Category.create({ name: req.body.name });
      res.json("Категория добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  editCategory: async (req, res) => {
    try {
      await Category.findByIdAndUpdate(req.params.categoryId, req.body);
      res.json("Категория изменена");
    } catch (err) {
      res.json(err);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.categoryId);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err);
    }
  },

  getCategories: async (req, res) => {
    try {
      const data = await Category.find().lean();
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
};
