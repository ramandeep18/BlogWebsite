import express from "express";
import bodyParser from "body-parser";
import _ from "lodash";
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/blogDB");

const app = express();
const port = 3000;

const homeStartingContent = "Embark on a captivating journey into the realms of imagination and insight as we invite you to our cherished haven—where words come alive and stories unfold. Our blog is more than just a collection of articles; it's a sanctuary for those who seek to explore the world through the transformative power of words.In this haven, words are not just letters on a page; they are gateways to new worlds, emotions, and perspectives. Welcome to our blog—a sanctuary where we invite you to explore, discover, and connect through the magical realms crafted by the power of words. Join us on this literary adventure, and let the exploration begin.";
const aboutContent = "Welcome to Blog Haven, a digital sanctuary where words weave tales, and exploration knows no bounds. Our journey began with a simple yet profound belief in the transformative power of words—a belief that stories have the ability to inspire, connect, and transport us to new realms of understanding.Blog Haven is more than a blog; it's a community, a shared space where readers and writers come together to celebrate the beauty of language and the richness of diverse narratives. We pride ourselves on creating an inclusive platform that welcomes voices from all walks of life.";
const contactContent = "Engagement is at the core of what we do. Connect with us not only through our articles but also on social media platforms. Join the conversation on Instagram, Twitter, and Facebook. Share your thoughts, experiences, and recommendations as we build a dynamic community passionate about the written word.";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const postSchema = {

  blogname: String,
 
  blogcontent: String
 
 };


const Post = mongoose.model("Post", postSchema);


app.get("/", (req, res) => {
  Post.find({}).then((posts)=>
    {
    res.render("home.ejs",{
      content:homeStartingContent,
      blogs:posts
    });
  })
   
    });
      


app.get("/about", (req, res) => {
    res.render("about.ejs",{aboutcont:aboutContent});
    
  });
  app.get("/contact", (req, res) => {
    res.render("contact.ejs",{contactcont:contactContent});
    
  });
  app.get("/compose", (req, res) => {
    res.render("compose.ejs");
    
  });
  
  
  
  app.get("/posts/:postId",async(req,res)=>{
    const requestedPostId=req.params.postId;
    const blog = await Post.findOne({_id: requestedPostId});
    if (blog) {
      res.render("post.ejs", {
        blogname: blog.blogname,
        blogcontent:blog.blogcontent,
        
      });
    } else {
      res.send("Post not found");}
    
  });
  
  app.post("/compose",(req,res)=>{
   
    const blog = new Post ({

      blogname: req.body.posttitle,
   
      blogcontent: req.body.postbody
   
    });
    blog.save().then(()=>{
      res.redirect("/");
    }).catch((err)=>{
      console.log(err);
    });
   
   
  })
  app.listen(port,()=>{
    console.log(`Server started on port ${port}`);
 });