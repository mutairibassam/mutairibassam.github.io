const express = require('express');
const { Ref } = require('faunadb');
const app = express()
const port = 5000

const faunadb = require('faunadb');
const client = new faunadb.Client({secret: 'fnAENIL8wlACDv9NZrFSHlPGKscj9229pSb-LqOx'})

const {
    Get,
    Match,
    Index,
    Create,
    Paginate,
    Collection,
    Lambda,
    Var,
    Join
} = faunadb.query;

app.get('/user/:id', async (req, res) => {
    console.log("accessed")
    const doc = await client.query(
        Get(
            Ref(
                Collection('users'),
                req.params.id
            )
        )

        // .error(e => res.send(e))
    )

    res.send(doc)
});

app.post('/user', async (req, res) => {
    console.log("accessed")
    const data = {
        name: "name",
        email: "email",
        program: "program"
    }
    
    const doc = await client.query(
        Create(
            Collection('users'),
            { data }
        )
        // .catch(e => res.send(e))
    )
    res.send(doc)
});

// app.listen(5000, () => console.log('API on https://localhost:5000'))

app.get('/test', async (req, res) => {
    console.log("hala")
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })