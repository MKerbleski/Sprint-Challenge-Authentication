const axios = require('axios');
const bcrypt = require('bcrypt');

const { authenticate } = require('./middlewares');

const {jwtKey} = require('../_secrets/keys.js');
const jwt = require('jsonwebtoken');

const db = require('../database/dbConfig');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/api/', (req, res) => {
    res.status(200).send("API running")
  })
  server.get('/', (req, res) => {
    res.status(200).send('API Running')
  })
};


function generateToken(user){
  
  const payload = {
    username: user.username
  }
  const options = {
    expiresIn: '2d',
    jwtid:'54321',
  }
  return jwt.sign(payload, jwtKey, options)
}


function register(req, res) {
  // implement user registration
  const user = req.body
  const hash = bcrypt.hashSync(user.password, 4);
  user.password = hash
  db('users')
    .insert(user)
    .then(id => {
        db('users')
          .where({id})
          .then(user => {
            const token = generateToken(user)
            res.status(201).json({message: 'user created. token created', token: token})
          })
          .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

function login(req, res) {
  // implement user login
  const loginContent = req.body
  db('users')
    .where({username: loginContent.username})
    .first()
    .then(dbUser => {
      if (dbUser && bcrypt.compareSync(loginContent.password, dbUser.password)){
        const token = generateToken(dbUser)
        res.status(200).json({message: 'user logged in. token created', token: token})
      } else {
        res.status(400).json({message: 'invalid username or password'})
      }

    }).catch(err => console.log(err))

}

function getJokes(req, res) {
  axios
    .get(
      'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten'
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
