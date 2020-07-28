// let a = 1;
// let b = 2;
// console.log("Sebelum di swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);
// [a, b] = [b, a];
// console.log("Setelah di swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
// const others = ["Cake", "Pie", "Donut"];

// const allFavorites = [...favorites, ...others];

// console.log(allFavorites);

// function sum(...numbers) {
//   var result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

// const uppperizedNames = ["Dimas", "Widy", "Buchori"].map((name) =>
//   name.toUpperCase()
// );

// console.log(...uppperizedNames);

// ["Dimas", "Widdy", "Buchori"].forEach((name) =>
//   console.log(`Nama saya ${name}`)
// );

// class Car {
//   constructor(manufactur, color) {
//     this.manufactur = manufactur;
//     this._color = color;
//     this.enginesActive;
//   }
//   get color() {
//     return `Warna mobil ${this._color}`;
//   }
//   set color(value) {
//     console.log(`warna mobil diubah dari ${this._color} menjadi ${value}`);
//     this._color = value;
//   }
// }

// const johnCar = new Car("Honda", "Red");
// console.log(johnCar._color);
// johnCar.color = "green";

// class Car {
//   constructor(manufacture, color) {
//     this.manufacture = manufacture;
//     this.color = color;
//     this.enginesActive = false;
//   }
//   startEngines() {
//     console.log("Mesin dinyalakan");
//     this.enginesActive = true;
//   }
//   turnOffEngines() {
//     console.log("Mesin Di matikan");
//     this.enginesActive = false;
//   }
//   info() {
//     console.log(`Manufacture: ${this.manufacture}`);
//     console.log(`Color: ${this.color}`);
//     console.log(`Engines: ${this.manufacture ? "Active" : "Inactive"}`);
//   }
// }
// // const johnCar = new Car("Honda", "Red");
// // johnCar.info();
// // johnCar.startEngines();
// // johnCar.info();

// const johnCar = new Car("H121S", "Honda", 4);
// // const tomMotor = new Motorcycle("GF121J", "Yamaha", 2);
// const dimasCar = new Car("TA1408K", "Tesla", 4);

// class Vehicle {
//   constructor(licensePlate, manufacture) {
//     this.licensePlate = licensePlate;
//     this.manufacture = manufacture;
//     this.engineActive = false;
//   }
//   /*
//   kode lainnya
//   */
// }

// /* kode lainnya dalam pembuatan class Car,
// Motorcycle, dsb. */

// class VehicleFactory {
//   static repair(vehicles) {
//     vehicles.forEach((vehicle) => {
//       console.log(
//         `Kendaraan ${vehicle.licensePlate} sedang melakukan perawatan`
//       );
//     });
//   }
// }

// //membuat instance untuk memanggil fungsi repair
// VehicleFactory.repair([johnCar, dimasCar]);

// console.log("Selamat Datang");
// setTimeout(() => {
//   console.log("Terimakasih sudah mampir, silahkan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa saya bantu");

// const getCake = (callback) => {
//   let cake = null;
//   console.log("Sedang membuat kue, silahkan tunggu...");
//   setTimeout(() => {
//     cake = "Kue dah jadii.. silahkan diincip";
//     callback(cake);
//   }, 3000);
// };

// getCake((cake) => {
//   console.log(cake);
// });

//barista mengambil biji kopi

// const arabicaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi arabica selesai!");
//     }, 4000);
//   });
// };

// const robustaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi robusta selesai!");
//     }, 2000);
//   });
// };

// const libericaOrder = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Kopi liberica selesai!");
//     }, 3000);
//   });
// };

// const promises = [arabicaOrder(), robustaOrder(), libericaOrder()];
// Promise.all(promises).then((resolvedValue) => {
//   console.log(resolvedValue);
// });

const state = {
  isCoffeMakeReady: true,
  seedStocks: {
    arabica: 250,
    robusta: 60,
    liberica: 80,
  },
};

//barista menghandle biji kopi
const getSeeds = (type, miligram) => {
  return new Promise((resolve, reject) => {
    if (state.seedStocks[type] >= miligram) {
      state.seedStocks[type] -= miligram;
      resolve("Biji kopi didapatkan!");
    } else {
      reject("Maaf stock kopi habis");
    }
  });
};

// barista handle make coffe
const makeCoffe = (seeds) => {
  return new Promise((resolve, reject) => {
    if (state.isCoffeMakeReady) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("Maaf mesin rusak");
    }
  });
};

const servingToTable = (coffe) => {
  return new Promise((resolve) => {
    resolve("pesanan kopi siap dihidangkan");
  });
};

async function reserveACoffe(type, miligrams) {
  try {
    const seed = await getSeeds(type, miligrams);
    const coffe = await makeCoffe(seed);
    const result = await servingToTable(coffe);
    console.log(result);
  } catch (rejectionReaction) {
    console.error(rejectionReaction);
  }
}

reserveACoffe("liberica", 80);

// function cobaPromise() {
//   return new Promise((resolve, reject) => {
//     const waktu = 5000;
//     if (waktu < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, waktu);
//     } else {
//       reject("lama luh!");
//     }
//   });
// }
// const coba = cobaPromise();
// coba
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (err) {
//     console.error(err);
//   }
// }

// cobaAsync();
