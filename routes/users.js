const express = require('express');
const router = express.Router();
const db = require("../models/userModel");
const userController = require('../controllers/userController');
const validationMiddleware = require("../middlewares/validationMiddleware");

/* GET users listing. */
router.get('/', userController.getUsers);

router.get('/:id', (request, response) => {
  const id = request.params.id;
  response.json(db.findUser(id));
});

router.post('/', validationMiddleware, (request, response) => {
  const user = db.insertUser(request.body);
  response.status(201).json(user);
});

router.put('/:id', validationMiddleware, (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body, true);
  response.status(200).json(user);
});

router.patch('/:id', (request, response) => {
  const id = request.params.id;
  const user = db.updateUser(id, request.body, false);
  response.status(200).json(user);
})

router.delete('/:id', (request, response) => {
  const id = request.params.id;
  db.deleteUser(id, request.body);
  response.status(200).json();
})

module.exports = router;
