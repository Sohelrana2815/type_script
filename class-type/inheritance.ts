class User {
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

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `userName: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }
}

let student1 = new Student("rakib", 52, 101);
student1.display();

// class object

// user1 - name: sohel rana, age: 21
// user2 - name: moon, age: 21

// let user1 = new User("Sohel Rana", 20);

// user1.display();
// let user2 = new User("SRM", 18);
// user2.display();
