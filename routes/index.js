const { Router } = require("express");

const router = Router();

router.use(require("./user.route"));
router.use(require("./service.route"));
router.use(require("./category.route"));

module.exports = router;
