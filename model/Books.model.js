module.exports = (sequelize, db_connection) => {
  const Books = db_connection.define(
    "books",
    {
      id: {
        type: sequelize.INTEGER,
        notNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: sequelize.STRING,
      },
      author: {
        type: sequelize.STRING,
      },
      publication: {
        type: sequelize.INTEGER,
      },
      price: {
        type: sequelize.BIGINT,
      },
    },
    {
      timestamps: false,
    }
  );
  return Books;
};
