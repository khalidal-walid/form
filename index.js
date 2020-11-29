const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!!'
  });
});

function isValid(mew) {
  return mew.name && mew.name.toString().trim() != '' &&
   mew.content && mew.content.toString().trim() != ''
}

app.post('/next', (req, res) =>{
  if(isValid(req.body)) {
    const mew = {
      name: req.body.name.toString(),
      content: req.body.content.toString()
    };

    console.log(mew);
    
  } else {
    res.status(422);
    res.json({
      message: 'Fill in the blank'
    });
  }
});

app.listen(3000, () => {
  console.log('Listening to port 3000');
});