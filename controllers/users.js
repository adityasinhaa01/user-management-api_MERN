const User = require('../models/user');

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserByID(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ status: "error", meesage: "No such User ID exists" });
  return res.json(user);
}

async function handleUpdateUserByID(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!user) {
    return res.status(404).json({ status: "error", meesage: "No such User ID exists" })
  }
  return res.json(user);
}

async function handleDeleteUserByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handleCreateUser(req, res) {
  const body = req.body;
  if (!body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title) {
    return res.status(400).json("All fields are required");
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title
  });
  console.log(result);
  return res.status(201).json({ status: "success", message: "User Created", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserByID,
  handleUpdateUserByID,
  handleDeleteUserByID,
  handleCreateUser,
}