import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/all", (req, res) => {
    const Blog = blog;
    res.json(Blog);
})

app.post("/post", (req, res) => {
    const post = {
        id: blog.length + 1,
        Tittle: req.params.Tittle,
        DayOfCretaion: "",
        BlogText: req.params.BlogText,
        Author: req.params.Author
    }
    blog.push(post);
    res.json(blog);
})

const blog = [{
    id: 1,
    Tittle: "The Rise of Decentralised Finance",
    DayOfCretaion: "2023-08-01 T 10:00:00",
    BlogText: "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabeled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading ",
    Author: "Alex Thompson"
},
{
    id: 2,
    Tittle: "The Impact of Artificial Intelligence on Modern Business",
    DayOfCretaion: "2023-08-05 T 14:30:00",
    BlogText: "Artificial Intelligence (AI) is no logr a concept of future. It's very much a part of our present, reshaping industries and enhancing the capibilities of existing systems.From automatinng routine tasks to offering intelligent insights, AI is proving to be boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable and tap inti new oppurtunities",
    Author: "Mia Williams"
}]

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})