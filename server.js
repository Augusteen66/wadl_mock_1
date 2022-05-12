const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const studentRoutes = require('./routes/student')
const connectDB = require("./config/mongoose.js")
const app = express()

app.use(express.json())

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// Set Templating Engine
app.use(expressLayouts)
app.set('view engine', 'ejs')

connectDB()

app.use(studentRoutes)

app.get("/" , (req , res)=>{
    res.render('index')
})


app.listen(3000, () => {
    console.log("Server up on port 3000!");
})