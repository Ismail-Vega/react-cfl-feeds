const serverProxy = require('./serverProxy');

module.exports = (app) => {
  app.get('/v1/*', async (req, res) => {
    const result = await serverProxy
      .get(req.url)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return `status: ${error?.response?.status} - ${error?.response?.statusText}`;
      });

    res.send(result?.data);
  });
};
