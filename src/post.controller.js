const { Router } = require("express");

const postController = Router();

// Example Route
postController.get('/example', (req, res) => {
    res.send({ message: 'Post Controller Success' });
});

module.exports = postController;