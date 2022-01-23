const express = require("express");
const router = express.Router();
const pool = require("./modules/pool");

router.get("/", (req, res) => {
  console.log("GET /feedback");
  pool
    .query('SELECT * from "feedback" ORDER BY date DESC;')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /", error);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  const feeling = req.body.feeling;
  const understanding = req.body.understanding;
  const support = req.body.support;
  const comments = req.body.comments;
  const queryText = `
          INSERT INTO "feedback" ("feeling","understanding", "support", "comments")
          VALUES ($1, $2, $3, $4);
      `;
  pool
    .query(queryText, [feeling, understanding, support, comments])
    .then((results) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      // We know this works
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete("/:feedbackId", (req, res) => {
  // Grab the URL parameter
  console.log("id is", req.params.feedbackId);

  let queryText = `
          DELETE FROM "feedback"
          WHERE id=$1; 
      `;
  let queryParams = [
    req.params.feedbackId, // $1
  ];

  pool
    .query(queryText, queryParams)
    .then((dbRes) => {
      // Send back a 👍
      res.sendStatus(204); // 204 = No Content
    })
    .catch((err) => {
      console.log("DELETE /item failed!", err);
    });
});

module.exports = router;
