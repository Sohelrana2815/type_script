// class Computer {
//   constructor(name, ram) {
//     this.name = name;
//     this.ram = ram;
//   }

//   aboutComputer() {
//     console.log(`Computer name: ${this.name}, Ram: ${this.ram} GB`);
//   }
// }

// let razer = new Computer("Razer 123", 16);

// console.log("Razer", razer);
// razer.aboutComputer();

class PersonInfo {
  #gender = "male";
  height = "5.6ft";
  constructor(name, age, isMarried) {
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
  }

  aboutPerson() {
    console.log(
      `Person info: Name: ${this.name}, age is: ${this.age}, is he married: ${
        this.isMarried
      } and gender is: ${this.#gender} height is: ${this.height}`
    );
    this.#genderCheck();
  }
  #genderCheck() {
    console.log(`Only selected gender is: ${this.#gender}`);
  }

  get heightDetails() {
    return this.height;
  }
  set heightDetails(ft) {
    this.height = ft;
  }
}

let person1 = new PersonInfo("John_Doe", 35, true);

console.log(person1);
console.log("Get", person1.heightDetails);
person1.heightDetails = "06ft";
console.log(person1.heightDetails);

person1.aboutPerson();
