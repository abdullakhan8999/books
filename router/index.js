// npm run dev
module.exports = function (App) {
  App.get("/", (req, res, next) => {
    res.write("This is base router.");
    res.end();
  });
};
