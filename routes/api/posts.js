const express = require('express');
const router = express.Router();


//@route  GET api/posts/test
//@desc   TESTS post routes
//@access Public
router.get('/test', (req, res) => res.json({msg: 'Post Works'}));

module.exports = router;
