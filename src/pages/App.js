import React, { useState } from "react";
import "./app.scss";
import r2000 from "../assets/images/2000 obverse.jpg";
import r5000 from "../assets/images/5000 obverse.jpg";
import r10000 from "../assets/images/10000 obverse.jpg";
import r20000 from "../assets/images/20000 obverse.jpg";
import r50000 from "../assets/images/50000 obverse.jpg";
import biskuitImg from "../assets/images/biscuit.png";
import chipsImg from "../assets/images/chips.png";
import oreoImg from "../assets/images/oreo.png";
import tangoImg from "../assets/images/tango.png";
import coklatImg from "../assets/images/chocolate.png";

class Food {
  name = "";
  stock = 10;
  price = 0;
  constructor(nama, harga) {
    this.name = nama;
    this.price = harga;
  }

  buy(money) {
    if (this.stock > 0) {
      if (money >= this.price) {
        let changeMoney = money - this.price;
        this.stock = this.stock - 1;
        return {
          change: changeMoney,
          stock: this.stock,
          message: "Transaksi berhasil",
        };
      } else {
        return {
          change: money,
          stock: this.stock,
          message: "Transaksi gagal. Uang tidak cukup",
        };
      }
    } else {
      return {
        change: money,
        stock: this.stock,
        message: "Stok habis",
      };
    }
  }
}

const biskuit = new Food("biskuit", 6000);
const chips = new Food("chips", 8000);
const oreo = new Food("oreo", 10000);
const tango = new Food("tango", 12000);
const coklat = new Food("coklat", 15000);

const App = () => {
  const [selectedMoney, setSelectedMoney] = useState(0);
  const [selectedFood, setSelectedFood] = useState("");
  const [receipt, setReceipt] = useState({});

  const handleMoney = (nominal) => {
    setSelectedMoney(nominal);
    setReceipt({});
  };
  const handleFood = (food) => {
    if (selectedMoney) {
      setSelectedFood(food);
    } else {
      alert("Kamu belum memasukkan uang");
    }
  };

  const onClick = () => {
    if (selectedMoney) {
      if (selectedFood) {
        switch (selectedFood.name) {
          case "biskuit":
            setReceipt(biskuit.buy(selectedMoney));
            break;
          case "chips":
            setReceipt(chips.buy(selectedMoney));
            break;
          case "oreo":
            setReceipt(oreo.buy(selectedMoney));
            break;
          case "tango":
            setReceipt(tango.buy(selectedMoney));
            break;
          case "coklat":
            setReceipt(coklat.buy(selectedMoney));
            break;
          default:
            break;
        }
      } else {
        alert("Anda belum memilih makanan anda");
      }
    } else {
      alert("Masukkan uang terlebih dahulu");
    }
    setSelectedMoney();
    setSelectedFood("");
  };

  return (
    <div className="app">
      <div className="bg-image"></div>
      <div className="vending-machine">
        <div className="step">
          <h1>Masukkan Uang anda</h1>
          <div className="money-container">
            <img
              alt=""
              src={r2000}
              className={selectedMoney === 2000 ? "selectedMoney" : ""}
              onClick={() => handleMoney(2000)}
            />
            <img
              alt=""
              src={r5000}
              className={selectedMoney === 5000 ? "selectedMoney" : ""}
              onClick={() => handleMoney(5000)}
            />
            <img
              alt=""
              src={r10000}
              className={selectedMoney === 10000 ? "selectedMoney" : ""}
              onClick={() => handleMoney(10000)}
            />
            <img
              alt=""
              src={r20000}
              className={selectedMoney === 20000 ? "selectedMoney" : ""}
              onClick={() => handleMoney(20000)}
            />
            <img
              alt=""
              src={r50000}
              className={selectedMoney === 50000 ? "selectedMoney" : ""}
              onClick={() => handleMoney(50000)}
            />
          </div>
          <div className="money">Uang: {selectedMoney}</div>
        </div>
        <div className="step">
          <h1>Silahkan Pilih Makanan</h1>
          <div className="food-container">
            <img
              alt=""
              src={biskuitImg}
              className={selectedFood.name === "biskuit" ? "selectedFood" : ""}
              onClick={() => handleFood(biskuit)}
            />
            <img
              alt=""
              src={chipsImg}
              className={selectedFood.name === "chips" ? "selectedFood" : ""}
              onClick={() => handleFood(chips)}
            />
            <img
              alt=""
              src={oreoImg}
              className={selectedFood.name === "oreo" ? "selectedFood" : ""}
              onClick={() => handleFood(oreo)}
            />
            <img
              alt=""
              src={tangoImg}
              className={selectedFood.name === "tango" ? "selectedFood" : ""}
              onClick={() => handleFood(tango)}
            />
            <img
              alt=""
              src={coklatImg}
              className={selectedFood.name === "coklat" ? "selectedFood" : ""}
              onClick={() => handleFood(coklat)}
            />
          </div>
          <div className="food">Makanan: {selectedFood.name}</div>
          <div className="food">Harga: {selectedFood.price}</div>
          <div className="food">Stok: {selectedFood.stock}</div>
          {/* <div className="food">Makanan: {selectedFood}</div> */}
        </div>
        <button type="button" onClick={onClick}>
          Beli
        </button>
        <div className="receipt">
          <p className="text-message">{receipt["message"]}</p>
          <p className="text-change">Kembalian : {receipt["change"]}</p>
          <p className="text-stock">Stok : {receipt["stock"]}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
