const db = require("../models/userModel");

function getUsers(req, res, next) {
    res.json(db.findUsers());
}

module.exports = {
    getUsers
}