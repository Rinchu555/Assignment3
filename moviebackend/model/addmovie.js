const mongoose=require ("mongoose");

mongoose.connect("mongodb+srv://rinchu555:rinchu123@cluster0.nbwsfby.mongodb.net/movieappdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))

let Schema=mongoose.Schema;

const movieSchema=new Schema({
    Movie_Name:String,
    Released_year:Number,
    Actor:String,
    Camera:String,
    Actress:String,
    Producer:String,
    Director:String,
    Language:String
});
var movieModel=mongoose.model("movies",movieSchema)
module.exports=movieModel;