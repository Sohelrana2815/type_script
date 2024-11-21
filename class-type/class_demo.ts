class User {
  // properties, methods, constructor

  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`userName: ${this.userName},age: ${this.age}`);
  }
}

// class object

// user1 - name: sohel rana, age: 21
// user2 - name: moon, age: 21

let user1 = new User("Sohel Rana", 20);

user1.display();
let user2 = new User("SRM", 18);
user2.display();
