var express = require('express');
var router = express.Router();
const db = require('../public/DB');

async function receiveDelUser() {
  router.post('/', async (req, res) => {
    await delUser(req.body.fid);
    res.redirect('http://192.168.0.8:3001/cashier');
  });
}

receiveDelUser();

async function delUser(fid) {
  try {
    await db.any(`
    DELETE FROM users WHERE id = '${fid}';
  `);
  } catch (e) {
    console.log(e, 'Passou por aqui');
  }
}

module.exports = router;
