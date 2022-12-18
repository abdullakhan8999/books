module.exports = (sequelize, db_connection) => {
  const todo = db_connection.define(
    "todo",
    {
      id: {
        type: sequelize.INTEGER,
        notNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        notNull: false,
        type: sequelize.STRING,
      },
      description: {
        notNull: false,
        type: sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return todo;
};
