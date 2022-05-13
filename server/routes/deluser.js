var express = require('express');
var router = express.Router();
const db = require('../public/DB');

async function receiveDelUser() {
  router.get('/', async (req, res) => {
    await delUser();
    console.log('Removed Joaoputo');
    res.send('JOAOPUTOS id>3 REMOVIDOS');
  });
}

receiveDelUser();

async function delUser() {
  await db.any(`
      DELETE FROM users WHERE id > 1;
    `);
}

module.exports = router;
