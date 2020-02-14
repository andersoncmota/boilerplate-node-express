module.exports = {
  dialect: 'postgres', // Verificar em https://sequelize.org/master/manual/dialect-specific-things.html
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'dbname',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
