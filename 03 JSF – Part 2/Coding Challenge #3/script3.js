const mark = {
  fullName: "mr Marks",
  Mass: 78,
  Height: 1.69,

  calcBMI: function () {
    this.BMI = this.Mass / this.Height ** 2;
    return this.BMI;
  },
};

const john = {
  Fullname: "Mr John",
  Mass: 92,
  Height: 1.95,

  calcBMI: function () {
    this.BMI = this.Mass / this.Height ** 2;
    return this.BMI;
  },
};

console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is 
${mark.calcBMI() >= john.calcBMI() ? "higher" : "lower"} than ${john.Fullname}
 (${john.calcBMI()})`);


