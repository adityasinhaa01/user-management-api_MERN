const express = require('express');
const {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleDeleteUserByID,
} = require("../controllers/users");
const router = express.Router();

router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateUser);

router
  .route("/:id")
  .get(handleGetUserByID)
  .patch(handleUpdateUserByID)
  .delete(handleDeleteUserByID)

module.exports = router;