
# Blog Haven App

This is a simple blog post application built using Express.js and MongoDB. It allows users to create and view blog posts.



## Installation

Clone the repository or download the code files.

Open a terminal and navigate to the project directory.

Install the dependencies by running the following command:

```bash
  npm install 
```
    
## Run Locally

Clone the repository or download the code files.



Go to the project directory

```bash
  cd projectname
```

Install dependencies

```bash
  npm install
```

Install Express

```bash
  npm install express
```

Install Mongoose
```bash
  npm install mongoose
```


## Usage

Start MongoDB server by running the following command in command shell:

```bash
  mongod
```


Start the server by running the following command:
```bash
  nodemon app.js
```

Access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```
This will open the home page where you can view existing blog posts and create new ones.
Navigate to the "Compose" page by clicking the "Compose" link. Here, you can enter a title and content for your blog post.
After entering the post details, click the "Publish" button to create the blog post.
To view a specific blog post, click on the post title from the home page. This will open the post page where you can see the full content of the post.


## Project Structure

- The project uses Express.js as the web application framework.
- The MongoDB connection is established using the mongoose package.
- The blog post data is stored in a MongoDB database.
- The project follows the MVC (Model-View-Controller) pattern:
- The blogSchema defines the structure of the blog post data.
- The Post model represents the MongoDB collection for blog posts.
- The views are rendered using the EJS (Embedded JavaScript) template engine.
- The routes handle the different HTTP requests and interact with the database.
- The app.js file sets up the Express.js application and defines the routes.




