const express = require("express");
const registerApi = require("./register");
const logingApi = require("./login");
const paymentApi = require("./payment");

const router = express.Router();

router.use(registerApi);
router.use(logingApi);
router.use(paymentApi);

module.exports = router;