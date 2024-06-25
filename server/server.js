const app = require("./app");
const { sequelize } = require("./db");

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  sequelize.sync({force: false});
  console.log(`Server listening at http://localhost:${PORT}`);
});
