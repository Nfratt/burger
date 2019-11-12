const express = require ('express');

const router = express.Router();

// import the models 
const burger = require('../models/burger.js');

// post/ add a burger
router.post('/api/burger', async (req, res) => {
    const result = await burger.create(
        ['burger name', 'devoured'],
        [req.body.burger_name, req.body.devoured],
    );
    res.json({id: result.insertId});
  });
//  put/update a burger
  router.put('/api/burger/:id', async (req, res) => {
    const condition = 'id = ' + req.params.id;
  
    console.log('condition', condition);
  
    const result = await burger.update(
        {devoured: req.body.devoured},
        condition,
  );
    // error reporting
    const status = result.changedRows === 0 ? 404 : 200;
    res.status(status).end();
  });
//   delete a burger
  router.delete('/api/burger/:id', async (req, res) => {
    const condition = 'id = ' + req.params.id;
  
    console.log('condition', condition);
  
    const result = await burger.delete(condition);
  
    //error reporting
    const status = result.affectedRows === 0 ? 404 : 200;
    res.status(status).end();
  });
//   for use server.js
  module.exports = router;
