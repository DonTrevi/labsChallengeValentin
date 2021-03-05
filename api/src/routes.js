// api/src/routes.js
const server = require("express").Router();
const axios = require("axios");

server.get("/api/search", (req, res) => {
  const element = req.query.q;
  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${element}`)
    .then((elements) => {
      const resource = elements.data.results;
      let products = resource.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          currency_id: product.currency_id,
          available_quantity: product.available_quantity,
          thumbnail: product.thumbnail,
          condition: product.condition,
        };
      });
      res.send(products);
    })
    .catch((err) => {
      return res.send(err, console.log("Hay un error")).status(400);
    });
});

module.exports = server;
