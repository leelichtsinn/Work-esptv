const express = require('express');
const app = express();
const xml = require('xml');

const employees = [{employees: [{ name: 'John' }, { name: 'Victoria' }, { name: 'Lee' }] }];

app.get('/', function (req, res) {
  res.send(xml(employees));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('app listening on port 3000');
});
