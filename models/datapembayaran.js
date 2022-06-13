const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class datapembayaran extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  datapembayaran.init(
    {
      id_pembayaran: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_pemesanan: {
        type: DataTypes.INTEGER,
      },
      tanggal_pembayaran: {
        type: DataTypes.DATE,
      },
      Status: {
        type: DataTypes.STRING,
      },
    },
    {
      // options
      sequelize,
      modelName: "todana",
      tableName: "shopee_to_dana",
      //   createdAt: "date_created",
      //   updatedAt: "date_updated",
      underscore: true,
    }
  );
  return todana;
};
