const { Router } = require("express");
const router = Router();
const customersRouter = require("../routes/customers");
const chargesRouter = require("../routes/charges");

router.use("/customers", customersRouter);
router.use("/charges", chargesRouter);

module.exports = router;
