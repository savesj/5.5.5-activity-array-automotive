const VehicleModule = require("./vehicle").Vehicle;
// add class that extends the vehicle class
class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maxSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  // if passenger less /equal than maximumPassengers then availableRoom == true
  loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
  // if fuel is greater than 0, then start == true
  start() {
    if (this.fuel > 0) {
      console.log("Engine is on");
      return (this.started = true);
    } else {
      console.log("Car needs fuel");
      return (this.started = false);
    }
  }
  // if mileage is greater than 30000, check for maintenance == true
  checkService() {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}
// console.log({ Car });
let myCar = new Car("Lamborghini", "URUS", "2022", "black", 5000);
console.log(myCar);
myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()
console.log(myCar)
