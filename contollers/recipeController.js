const recipes= require('../models/recipeModel')

// get all recipes
exports.getAlRecipesController = async(req,res)=>{
    console.log("inside getAlRecipesController");
    try{
        const allRecipes = await recipes.find()
        res.status(200).json(allRecipes)
    }catch(err){
        console.log(err);
        res.status(500).json(er)
    }
}