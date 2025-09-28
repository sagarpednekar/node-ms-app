"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Define user-related routes here
router.get("/", user_controller_1.getUsers);
exports.default = router;
