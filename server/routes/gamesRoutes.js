module.exports = (app) => {
  app.get('/api/auth/logout', (req, res) => {
    req.logout();
    res.send({});
  });

  app.get('/api/auth/fetch', (req, res) => {
    res.send(req.user);
  });
};
