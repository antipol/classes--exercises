//CLASSES

//1. Person Class
class Person {
  constructor(name, age){
  this.name = name;
  this.age = age;
  }
  describe() {
    console.log(`${this.name}, ${this.age} years old.`);
  }
}
const john = new Person('John', 29);

john.describe();
//John, 29 years old.


//2. Volume
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  calcVolume() {
    const volume = Number((Math.PI * this.radius * 2 * this.height).toFixed(4));
    console.log(volume);
  }
}
const cylinder1 = new Cylinder(2, 10);
cylinder1.calcVolume();
//125.6637
const cylinder2 = new Cylinder(5, 9);
cylinder2.calcVolume();
//282.7433


//3. Tick Tock
class Clock {
  constructor(h, m, s) {
    this.hours = h;
    this.minutes = m;
    this.seconds = s;
  }
  showTimer() {
    const getHours = new Date().getHours();
    const getMins = new Date().getMinutes();
    const getSecs = new Date().getSeconds();

    getHours < 10 ? this.hours = '0' + getHours : this.hours = getHours;

    getMins < 10 ? this.minutes = '0' + getMins : this.minutes = getMins;

    getSecs < 10 ? this.seconds = '0' + getSecs : this.seconds = getSecs;

    const output = `${this.hours}:${this.minutes}:${this.seconds}`;
  }
  startTimer() {
    this.showTimer();
    this.timer = setInterval(this.showTimer, 1000);
  }
  stopTimer() {
    clearInterval(this.timer);
  }
}
const timer = new Clock(1, 1, 1);

// timer.startTimer();
//Shows a clock, updating every second


//4. TV class
class TV {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  //Show tv status brand, channel and volume)
  tvStatus() {
    console.log(`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
  }
  //increase volume
  increaseVolume(vol) {
    const newVolume = this.volume + vol;
    if (newVolume < 0) {
      this.volume = 0;
    } else if (newVolume > 100) {
      this.volume = 100;
    } else {
      this.volume = newVolume;
    }
    this.tvStatus();
  }
  //decrease volume
  decreaseVolume(vol) {
    const newVolume = this.volume - vol;
    if (newVolume < 0) {
      this.volume = 0;
    } else if (newVolume > 100) {
      this.volume = 100;
    } else {
      this.volume = newVolume;
    }
    this.tvStatus();
  }
  //change channel
  changeChannel(channel) {
    channel >= 0 && channel <= 50 ? this.channel = channel : console.log(`Channel ${channel} doesn't exist.`);
    this.tvStatus();
  }
  //reset TV
  tvReset() {
    this.channel = 1;
    this.volume = 50;
    this.tvStatus();
  }
}

// Instantiate a TV object
const tv1 = new TV('Sony', 4, 54)

tv1.decreaseVolume(1);
//Sony at channel 4, volume 53

tv1.increaseVolume(10);
//Sony at channel 4, volume 63

tv1.decreaseVolume(100);
//Sony at channel 4, volume 0

tv1.changeChannel(55);
//Channel 55 doesn't exist.
// Sony at channel 4, volume 0

tv1.changeChannel(10);
//Sony at channel 10, volume 0

tv1.tvReset()
//Sony at channel 1, volume 50


//5. Circle
class Circle {
  constructor(radius) {
    this.r = radius;
  }
  getArea() {
    const circleArea = Math.PI * this.r ** 2;
    console.log(circleArea);
  }
  getCircumference() {
    const circleCircumference = 2 * Math.PI * this.r;
    console.log(circleCircumference);
  }
}
const circle1 = new Circle(11);
circle1.getArea();
//380.132711084365

const circle2 = new Circle(4.44);
circle2.getCircumference();
//27.897342763877365
