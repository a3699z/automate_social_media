var config = {
  debug: false,
  database: {
    connectionLimit: 500,
    host: "localhost",
    user: "indiepro_superadmin",
    password: "TeeIsVV*~.u(",
    database: "indiepro_cwsprout",
    charset: "utf8mb4",
    debug: false,
    waitForConnections: true,
    multipleStatements: true,
  },
  cors: {
    origin: "*",
    optionsSuccessStatus: 200,
  },
};

module.exports = config;
