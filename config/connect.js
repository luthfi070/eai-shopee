const { Sequelize } = require("sequelize");

const db = new Sequelize("iae_shopee", "admin", "admin1234", {
  host: "db-shopee.c2gimdexmaod.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
});

const koneksi = async () => {
  try {
    await db.authenticate();
    console.log("sukses");
  } catch (err) {
    console.log("error", err);
  }
};

koneksi();
exports.modules = db;
global.db = db;
