const server = require("./app");
const saveApiData = require("./controllers/saveApiData");
const { sequelize } = require("./DB_connection");
const PORT = 3001;

server.listen(PORT, () => {
    sequelize.sync({force: true})
    .then(() => saveApiData());
    console.log('Server raised in port ' + PORT);
});