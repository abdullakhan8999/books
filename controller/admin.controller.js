const db = require("./../model/index");

exports.get_All_admin = async (req, res, next) => {
  try {
    const admin = await db.admin.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(`All admin details:\n${JSON.stringify(admin, null, 2)}`);
    res.end();
  } catch (error) {
    next(error);
  }
};
exports.get_Admin = async (req, res, next) => {
  await db.admin
    .findByPk(req.params.id)
    .then((admin) => {
      res.status(200).write(JSON.stringify(admin, null, 2));
      res.end();
    })
    .catch((err) => {
      res.status(500).send({
        message: `Some Internal error ${err.message} while fetching the admin based on the id:${req.params.id}`,
      });
    });
};
