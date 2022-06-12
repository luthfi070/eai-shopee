const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  todana.init(
    {
      id_seller: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nama_seller: {
        type: DataTypes.STRING,
      },
      nohp_seller: {
        type: DataTypes.INTEGER,
      },
      id_produk: {
        type: DataTypes.INTEGER,
      },
      nama_produk: {
        type: DataTypes.STRING,
      },
      Kategori_Produk: {
        type: DataTypes.STRING,
      },
      Harga: {
        type: DataTypes.BIGINT,
      },
      id_pemesanan: {
        type: DataTypes.INTEGER,
      },
      nama_user: {
        type: DataTypes.STRING,
      },
      alamat_user: {
        type: DataTypes.STRING,
      },
      no_hp: {
        type: DataTypes.STRING,
      },
      qty: {
        type: DataTypes.INTEGER,
      },
      total_harga: {
        type: DataTypes.INTEGER,
      },
      tanggal_pemesanan: {
        type: DataTypes.DATE,
      },
      id_pembayaran: {
        type: DataTypes.INTEGER,
      },
      total_bayar: {
        type: DataTypes.INTEGER,
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
