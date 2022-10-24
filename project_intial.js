const Car = function(speed,make){
    this.speed = speed
    this.make = make;
};

// Car.prototype.acclerate = function(){
//     this.speed +=20  
//    console.log(`${this.make} going at ${this.speed} km/h ,with charge of ${this.chargeTo}`);
//   };

    Car.prototype.acclerate = function(){
        this.speed +=20 
        this.chargeBattrey-=1 
       console.log(`${this.make} going at ${this.speed} km/h ,with charge of ${this.currentBattrey}`);
      };

  Car.prototype.brake = function(){
    this.speed -=5
    console.log(`${this.make} is slowing down at ${this.speed}`);
  };



const Elementcar = function(make,speed,currentBattrey){
    Car.call(this,speed,make)
    this.currentBattrey = currentBattrey
};

    Elementcar.prototype = Object.create(Car.prototype)

    Elementcar.prototype.chargeBattrey = function(chargeTo){
    this.chargeTo = chargeTo
    };

    // Elementcar.prototype.acclerate = function(){
    //     this.speed +=20 
    //     this.chargeBattrey-=1 
    //    console.log(`${this.make} going at ${this.speed} km/h ,with charge of ${this.currentBattrey}`);
    //   };

const tesla = new Elementcar('Tesla',120,86)
const Range_rover= new Elementcar('Range rover',180,89)

tesla.chargeBattrey()
tesla.brake()
tesla.acclerate()
Range_rover.chargeBattrey()
Range_rover.brake()
Range_rover.acclerate()