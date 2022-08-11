const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: '*'
}))

let ITEMS_DATA = [
  {text: 'Text 1', isChecked: false, id: 1},
  {text: 'Text 2', isChecked: false, id: 2},
  {text: 'Text 3', isChecked: false, id: 3},
]

app.get('/api/items', (req, res, next) => {
  res.status(200).json(ITEMS_DATA);
})

app.use(express.json())

app.post('/api/items', (req, res, next) => {
  let item = {...req.body};
  let length = Object.keys(item).length;
  if (length === 1 && req.body.itemId) {
    ITEMS_DATA = ITEMS_DATA.map(item => {
      if (item.id === req.body.itemId) {
        return {...item, isChecked: !item.isChecked}
      }
      return item;
    })
  }
  if (length === 1 && req.body.board) {
    ITEMS_DATA = req.body.board;
  }
  if (length === 3) {
    ITEMS_DATA.push(item);
    res.status(201).json(item);
  }
  if (length === 1 && req.body.params) {
    let itemId = req.body.params
    ITEMS_DATA = ITEMS_DATA.filter(i => i.id !== itemId);
    res.status(201).json(itemId);
  }
  if (length === 2) {
    ITEMS_DATA = ITEMS_DATA.map(item => {
      if (item.id === req.body.itemId) {
        return {...item, text: req.body.text}
      }
      return item;
    })
  }
  console.log(req.body)
  console.log(ITEMS_DATA)
})

app.use(express.static(path.resolve(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.listen(3002, () => console.log("the port is working"));