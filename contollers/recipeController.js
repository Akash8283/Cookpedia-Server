const recipes= require('../models/recipeModel')

// get all recipes
exports.getAllRecipesController = async(req,res)=>{
    console.log("inside getAlRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        console.log(err);
        res.status(500).json(er)
    }
}

// view recipe
exports.viewRecipeController = async(req,res)=>{
    console.log("inside viewRecipeController");
    const {id} = req.params
    try{
      const viewRecipe = await recipes.findById({_id:id})
      res.status(200).json(viewRecipe)
    }catch(err){
        console.log(err);
        res.status(500).json(er)
    }
}

// related recipe
exports.relatedRecipeController = async(req,res)=>{
    console.log("inside relatedRecipeController");
    const {cuisine} = req.query
    try{
      const allRecipes = await recipes.find({cuisine})
      res.status(200).json(allRecipes)
    }catch(err){
        console.log(err);
        res.status(500).json(err)
    }
}