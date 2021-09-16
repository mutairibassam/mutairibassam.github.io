// const express = require("express");
// const app = express();
// const port = 5000;

const faunadb = require("faunadb");
const client = new faunadb.Client({ secret: process.env.USERSDB_API_KEY });

const { Get, Match, Index, Create, Paginate, Collection, Lambda, Var, Join } =
  faunadb.query;

const q = faunadb.query;

const addUsers = async (name, email, program) => {
  return await client.query(
    q.Create(q.Collection("users"), {
      data: { name, email, program },
    })
  );
};

// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`);
// });

module.exports = {
  addUsers,
};
