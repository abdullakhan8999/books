module.exports = (sequelize, db_connection) => {
  return db_connection.define(
    "cart",
    {
      id: {
        type: sequelize.INTEGER,
        notNull: false,
        type: sequelize.INTEGER,
        notNull: false,
        primaryKey: true,
      },
      cost: {
        type: sequelize.DECIMAL,
        notNull: false,
      },
    },
    {
      timestamp: false,
    }
  );
};
