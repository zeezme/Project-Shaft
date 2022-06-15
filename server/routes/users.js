var express = require('express');
var router = express.Router();
const db = require('../public/DB/');

(async function() {
  router.get('/', async (req, res) => {
    res.send(await getUsers('*', 'users'));
  });
})();

async function getUsers(colum, table) {
  try {
    let users = await db.any(
      `
          SELECT ${colum} FROM ${table};
      `
    );
    return users;
  } catch (e) {
    console.log('Failed to coonect to db', e);
  }
}

module.exports = router;
