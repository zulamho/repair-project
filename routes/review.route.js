const { Router } = require("express");
const { reviewController } = require("../controllers/review.controller");

const router = Router();

router.get("/review", reviewController.getReview);
router.post("/review", reviewController.createReview);
router.patch("/review/:id", reviewController.editReview);
router.delete("/review/:id", reviewController.deleteReview);

module.exports = router;
