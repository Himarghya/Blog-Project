import express from 'express';
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "http://localhost:4000";

app.use(express.static('public'));

app.get("/", async (req, res) => {
    const response = await axios.get(API_URL + "/all")
    const result = response.data;
    res.render("index.ejs", {
        data: result
    });
})
app.get("/NewPost", (req, res) => {
    res.render("modify.ejs");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})