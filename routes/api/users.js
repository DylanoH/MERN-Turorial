const express = require('express');
const router = express.Router();

//@route  GET api/users/test
//@desc   TESTS users routes
//@access Public
router.get('/test', (req, res) => res.json({msg: 'User Works'}));

module.exports = router;
