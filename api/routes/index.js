const { Router } = require("express");
const router = Router();
const customersRouter = require("../routes/customers");
const chargesRouter = require("../routes/charges");
const { verifyToken } = require("../middlewares/middleware");
const { authenticateUser } = require("../controllers/auth");

router.use("/login", authenticateUser);
router.use("/customers", verifyToken, customersRouter);
router.use("/charges", verifyToken, chargesRouter);

module.exports = router;
