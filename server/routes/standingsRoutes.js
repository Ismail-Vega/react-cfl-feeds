const serverProxy = require('../serverProxy');

module.exports = (app) => {
  app.get('/api/task/load/:name', async (req, res) => {
    var taskName = req?.params && req.params.name;

    var query;

    if (taskName && taskName != null) {
      query = 'name@is@(S)' + taskName;
    }

    const result = await serverProxy.get('/task/load?params=' + query);

    res.send(result && result.data);
  });

  app.get('/api/task/list', async (req, res) => {
    const result = await serverProxy.get('/task/list');

    res.send(result && result.data && result.data.List);
  });
};
