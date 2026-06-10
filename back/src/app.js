const express = require("express");
const nodeModel = require("./models/note.model");
const noteModel = require("./models/note.model");
const multer = require("multer");
const uploadfile = require("./services/storage.service");
const postModel = require("./models/post.model");

const app = express();
app.use(express.json());



const upload = multer({storage:multer.memoryStorage()});

// app.post("/notes",async(req, res) => {
//     const data = req.body;
//     await noteModel.create({
//         title: data.title,
//         description: data.description,
//     })
//     res.status(200).json({
//         message: "Note created successfully"
//     })
// })

// app.get("/notes", async(req, res) => {
    
//     const notes = await noteModel.find()

//     res.status(200).json({
//         message: "Notes fetched successfully",
//         notes: notes
//     })
// })

// app.patch("/notes/:id", async(req, res) => {

//     const id = req.params.id;
//     const description = req.body.description;

//     await noteModel.findOneAndUpdate({_id: id }, {description: description})

//     res.status(200).json({
//         message: "Note updated successfully"
//     })
// })

//           post model ////////
app.post("/create-post", upload.single("image"), async(req, res) => {


    console.log(req.body);
    console.log(req.file);

    const result = await uploadfile(req.file.buffer)
    console.log(result);


    const post = await postModel.create({
        image: result.url,
            caption: req.body.caption
    })

        return res.status(201).json({
            message : "Post created successful",
            post
        })
})

     app.get("/posts", async(req, res) => {

        const posts = await postModel.find()
        return res.status(200).json({
            message: "Posts fetched successfully",
            posts
        })
     })

module.exports =app