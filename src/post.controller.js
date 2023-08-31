const { Router } = require("express");

const postController = Router();

// Example Route
postController.get('/status', (req, res) => {
    res.send({ message: 'Post Service Success' });
});

module.exports = postController;