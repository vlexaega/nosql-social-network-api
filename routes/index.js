// Require express router
const router = require("express").Router();

// Import all of the API routes
const apiRoutes = require("./api");

// add prefix of `/api` to all of the api routes
router.use("/api", apiRoutes);

// 404 Status error message
router.use((req, res) => {
  res
    .status(404)
    .send(
      '<img src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" width="400" height="300"><h1>Aw man...404 Not Found.</h1>'
    );
});

// Module exports router
module.exports = router;