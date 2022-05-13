var express = require('express');
var router = express.Router();
const db = require('../public/DB/');

async function watchUsersRoute() {
  router.get('/', async (req, res) => {
    res.send(await getUsers('*', 'pratos'));
  });
}

watchUsersRoute();

async function getUsers(colum, table) {
  let users = await db.any(
    `
        SELECT ${colum} FROM ${table};
    `
  );

  return users;
}
module.exports = router;
