const express = require("express");
const app = express();
const port = 3000;
const superagent = require("superagent");
const { todana } = require("./models/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let data = [
  { nama: "luthfi", umur: 20 },
  { nama: "kamu", umur: 19 },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.get("/get-data-shopee", async (req, res) => {
  let data = await todana.findAll({
    attributes: [
      "id_pembayaran",
      "nama_user",
      "no_hp",
      "Kategori_Produk",
      "total_bayar",
      "nama_produk",
    ],
  });
  res.json({
    data,
  });
});

app.post("/integrasi-data-pembayaran-done", async (req, res) => {
  const dataDana = await superagent.get(
    "http://localhost:3001/get-all-payment-done"
  );

  let data = JSON.parse(dataDana.text);

  res.send(data);
  // for(i = 0; i < dataDana.data.length; i++){

  // }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
