const express = require("express");
const path = require("path");
const app = express(); 
const hbs = require("hbs");

const port = 8000;

// const static_path = path.join(__dirname,"../public")
const template_Path=path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname, "../templates/partials");
// app.use(express.static(static_path));  // static website ko render karne ka tarika

// batana tho padega na ki views folder ko chage kark template kar diye hai
app.set('view engine','hbs');
app.set('views' , template_Path)

// partilas k liye register kar rehe hai
hbs.registerPartials(partialPath);

app.get("/" , (req,res)=>{
    // res.send("welconmt to thapa technical")
    res.render('index')
})

app.get("/about", (req, res) => {
//   res.send("welconmt to thapa technical about");
    res.render('about')
});


app.get("/wheather", (req, res) => {
//   res.send("welconmt to thapa technical  wheather");
     res.render('wheather')
});

app.get("*", (req, res) => {
  res.send(" 404 error page ooops");
});




app.listen(port,()=>{
    console.log(`listining to the ${port}`) ;
})