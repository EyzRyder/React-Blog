const express = require('express');
const careerController = require('../controllers/careerController');
const router = express.Router();

router.get('/', careerController.career_index);

router.post('/', careerController.career_create_post);

router.get('/:id', careerController.career_details);

router.delete('/:id', careerController.career_delete);

module.exports = router;