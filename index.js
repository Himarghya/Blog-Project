import express from 'express';
import axios from "axios";
import bodyParser from 'body-parser';

const port = 3000;
const app = express();
const API_URL = "http://localhost:4000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", async (req, res) => {
    const response = await axios.get(API_URL + "/all")
    const result = response.data;
    res.render("index.ejs", {
        data: result
    });
})
//After pressing New Post
app.get("/NewPost", (req, res) => {
    res.render("modify.ejs");
})
//Submit button for New Post
app.post("/Submit", async(req, res) =>{
         const response = await axios.post( `${API_URL}/post`, req.body);
         res.redirect("/");
})
app.get("/EditText/:id", async(req, res) =>{
    const ID = parseInt(req.params.id);
    const response = await axios.get(`${API_URL}/all/${ID}`);
    const data = response.data;
    res.render("Edit.ejs", {
        Data : data
    });
})
app.post("/Submit/Edit/:id", async(req, res) =>{
    const ID = req.params.id;
    const response = await axios.patch(`${API_URL}/CompleteEdit/${ID}` , req.body);
    res.redirect("/")
})
app.get("/DeleteText/:id" , async(req, res)=>{ 
    try {
    const ID = parseInt(req.params.id);
    await axios.delete(`${API_URL}/Delete/${ID}`);
    res.redirect("/");  
  } catch (error) {
    res.status(500).json({ message: "Error deleting post" });
  }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})