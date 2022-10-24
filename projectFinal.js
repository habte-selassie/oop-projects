class CarCl{
   
    #chargeBattrey
constructor(make,speed){
    this.make = make;
    this.speed = speed;
}

acclerate(){
this.speed+=20
this.chargeBattrey-=1 
console.log(`${this.make} going at ${this.speed} km/h ,with charge of ${this.#chargeBattrey}`);
return this;
};

brake(){
this.speed-=5
console.log(`${this.make} is slowing down at ${this.speed}`);
}
};

class EVCL extends CarCl{
    #chargeBattrey;
    constructor(make,speed,chargeBattrey,greet){
        super(make,speed)

        this.#chargeBattrey = chargeBattrey
        this.greet = greet
    }

charge(){
this.chargeBattrey = chargeBattrey
console.log('hi');
return this
}  

acclerate(){
    this.speed+=20
    this.#chargeBattrey-=1 
    console.log(`${this.make} going at ${this.speed} km/h ,with charge of ${this.#chargeBattrey}`);
    return this;
    };
};
const tesla = new EVCL('Tesla',120,86)
const Range_rover= new EVCL('Range rover',180,89)
//tesla.chargeBattrey(90)
tesla.brake()
tesla.acclerate().brake()
console.log(tesla.chargeBattrey);
//Range_rover.chargeBattrey()
Range_rover.brake()
Range_rover.acclerate()