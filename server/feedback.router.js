const express = require("express");
const router = express.Router();
const pool = require("./modules/pool");

router.get("/", (req, res) => {
  console.log("GET /feedback");
  pool
    .query('SELECT * from "feedback";')
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

module.exports = router;
