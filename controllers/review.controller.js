const Review = require("../models/Review.model");

module.exports.reviewController = {
  createReview: async (req, res) => {
    try {
      await Review.create({
        name: req.body.name,
        text: req.body.text,
      });
      res.json("Отзыв добавлен");
    } catch (err) {
      res.json(err);
    }
  },

  editReview: async (req, res) => {
    try {
      await Review.findByIdAndUpdate(req.params.id);
      res.json("Отзыв изменен");
    } catch (err) {
      res.json(err);
    }
  },

  deleteReview: async (req, res) => {
    try {
      await Review.findByIdAndRemove(req.params.id);
      res.json("Отзыв удален");
    } catch (err) {
      res.json(err);
    }
  },

  getReview: async (req, res) => {
    try {
      const rev = await Review.find().lean();
      res.json(rev);
    } catch (err) {
      res.json(err);
    }
  },
};
