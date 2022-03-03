class Student {
  constructor(name, sport) {
    this.name = name;
    this.sport = sport;
  }
  getStudentsWhoOnlyLoveSoccer() {
    const propOwn = Object.getOwnPropertyNames(sport);
    for (let i = 0; i < propOwn.length; i++) {
      if (this.sport == propOwn[i]) {
        sport["SOCCER"] += 1;
      }
    }
    console.log(sport);
  }

  getStudentsWhoLoveBasketballAndSoccer() {
    const propOwn = Object.getOwnPropertyNames(sport);
    for (let i = 0; i < this.sport.length; i++) {
      for (let j = 0; j < propOwn.length; j++) {
        if (this.sport[i] == propOwn[j]) {
          sport[this.sport[i]] += 1;
        }
      }
    }
    console.log(sport);
  }

  getStudentsWhoLoveBasketballOrSwimming() {
    const propOwn = Object.getOwnPropertyNames(sport);
    for (let i = 0; i < this.sport.length; i++) {
      for (let j = 0; j < propOwn.length; j++) {
        if (this.sport[i] == propOwn[j]) {
          sport[this.sport[i]] += 1;
        }
      }
    }
    console.log(sport);
  }
}

const sport = {
  BASKETBALL: 0,
  SOCCER: 0,
  SWIMMING: 0,
  CHESS: 0,
  OTHER: 0,
};

const student1 = new Student("ARKIN", "SOCCER");
student1.getStudentsWhoOnlyLoveSoccer();

const student2 = new Student('HELMI', ["SOCCER", "BASKETBALL"])
student2.getStudentsWhoLoveBasketballAndSoccer();

const student3 = new Student('HAFID', ["BASKETBALL", "SWIMMING"])
student3.getStudentsWhoLoveBasketballOrSwimming();


















// function getStudentsWhoOnlyLoveSoccer() {
//   const cek = new Student("zaka", "SOCCER");
//   const propOwn = Object.getOwnPropertyNames(sport);
//   for (let i = 0; i < propOwn.length; i++) {
//     if (cek.sport == propOwn[i]) {
//       sport["SOCCER"] += 1;
//     }
//   }
//   console.log(sport);
// }

// function getStudentsWhoLoveBasketballandSoccer() {
//   const propOwn = Object.getOwnPropertyNames(sport);
//   const cek = new Student("ARKIN", ["BASKETBALL", "SOCCER"]);
//   for (let i = 0; i < cek.sport.length; i++) {
//     for (let j = 0; j < propOwn.length; j++) {
//       if (cek.sport[i] == propOwn[j]) {
//         sport[cek.sport[i]] += 1;
//       }
//     }
//   }
//   console.log(sport);
// }
