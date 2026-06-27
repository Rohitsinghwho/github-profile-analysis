import express from "express";
import { createUser, retrieveUser } from "./user.controller.js";
import { attachUsernameToGithub } from "../../middleware/attachUsername.middleware.js";
const router = express.Router();

router.post("/:username", attachUsernameToGithub, createUser);
router.get("/:username", attachUsernameToGithub, retrieveUser);

export default router;