import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/all", (req, res) => {
    const Blog = blog;
    res.json(Blog);
})

app.get("/all/:id" , (req, res)=>{
    const ID = parseInt(req.params.id);
    const CorrectBlog = blog.find((h) => h.id === ID);
    res.json(CorrectBlog);
})

app.post("/post", (req, res) => {
    const post = {
        id: blog.length + 1,
        Tittle: req.body.Tittle,
        DayOfCretaion: Date(),
        BlogText: req.body.Context,
        Author: req.body.Author
    }
    blog.push(post);
    console.log(post);
    res.json(blog);
})

app.patch(`/CompleteEdit/:id`, (req, res) => {
    const ID = parseInt(req.params.id);
    const ArryNo = blog.find((N)=> N.id === ID);
    const post = {
        id :ID,
        Tittle: req.body.Tittle || ArryNo.Tittle,
        BlogText: req.body.Context || ArryNo.BlogText,
        Author: req.body.Author || ArryNo.Author
    }
    const IDno = blog.findIndex((N)=> N.id === ID);
    blog[IDno] = post;
    res.json(post);
})

app.delete(`/Delete/:id` , (req, res)=>{
    const ID = parseInt(req.params.id);
    const IndexNo = blog.findIndex((Index) => Index.id === ID);
    blog.splice(IndexNo , 1);
    res.json();
})

var blog = [{
    id: 1,
    Tittle: "The Rise of Decentralised Finance",
    DayOfCretaion: "Wed June 28 2025 12:00:19 GMT+08:30 (India Standard Time)",
    BlogText: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabeled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading ",
    Author: "Alex Thompson"
},
{
    id: 2,
    Tittle: "The Impact of Artificial Intelligence on Modern Business",
    DayOfCretaion: "Tue Aug 08 2024 10:00:00 GMT+10:30 (India Standard Time)",
    BlogText: "Artificial Intelligence (AI) is no logr a concept of future. It's very much a part of our present, reshaping industries and enhancing the capibilities of existing systems.From automatinng routine tasks to offering intelligent insights, AI is proving to be boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable and tap inti new oppurtunities",
    Author: "Mia Williams"
}]

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})