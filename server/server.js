const { startDBSimulator } = require('./simulation/dbSimulator');
const { initRest } = require('./services/restApi/rest');
const emailReportsRoutes = require('./routes/emailReportsRoutes');

startDBSimulator(15);

const routes = {
  '/api/emailReports': emailReportsRoutes,
};

initRest({
  port: process.env.PORT || 5000,
  routes,
});
