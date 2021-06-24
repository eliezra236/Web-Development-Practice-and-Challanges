const mongoose = require("mongoose");
const express = require("express");
const ejs = require("ejs");
const app = express();

app.use(express.urlencoded());
app.set("view engine", ejs);
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true });

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Article = mongoose.model("Article", articleSchema);

app.listen("3000", function () {
  console.log("server has started at port 3000");
});

// ----------------------------------------------

// Handle all the requests for the articles route

app
  .route("/articles")
  .get(function (req, res) {
    Article.find({}, function (err, resultArticles) {
      if (err) {
        res.send(err);
      } else {
        res.send(resultArticles);
      }
    });
  })

  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Article has been saved");
      }
    });
  })

  .delete(function (req, res) {
    Article.deleteMany({}, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfuly deleted all the articles");
      }
    });
  });

// Handle all the request to a specific article

app
  .route("/articles/:articleTitle")
  .get(function (req, res) {
    Article.findOne({ title: req.params.articleTitle }, function (
      err,
      resultArticle
    ) {
      if (err) {
        res.send(err);
      } else if (resultArticle) {
        res.send(resultArticle);
      } else {
        res.send("Couldn't find an article with that name");
      }
    });
  })

  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Sucessfuly updated the document");
        }
      }
    );
  })

  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Succesfuly updated the given field");
        }
      }
    );
  })

  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfuly deleted the document");
      }
    });
  });
