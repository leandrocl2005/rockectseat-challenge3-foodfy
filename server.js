const express = require('express')
const nunjucks = require('nunjucks')
const cards = require('./cards')
const receitas = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false, /* to render html as data, see about.work */
    nocache: true,
    watch: true 
})

server.get("/", function(req, res){
    const featureds = cards.filter(function(card) {
      return card.featured;
    });

    return res.render("index", {items: featureds})
})

server.get("/sobre", function(req, res){
    return res.render("sobre")
})

server.get("/receitas", function(req, res){
    return res.render("receitas", {items: cards})
})

server.get("/receita/:index", function (req, res) {
    const recipeId = req.params.index;
    const recipe = receitas.find(recipe => 
        recipe.id === recipeId
    )
    return res.render("receita", {item: recipe})
  })
  

server.listen(5000, function(){
    console.log("server is run!")
})