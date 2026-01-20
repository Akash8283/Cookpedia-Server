const express = require('express')
const recipeController = require('../contollers/recipeController')
const router = new express.Router()

// get all recipes
router.get('/recipes',recipeController.getAlRecipesController)

module.exports = router