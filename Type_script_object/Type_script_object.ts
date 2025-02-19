// type StudentInfo = {
//   firstName: string;
//   lastName: string;
//   id: number;
// };

// type SubjectInfo = {
//   major: string;
//   subjectsCount: number;
//   isStudent: boolean;
//   collegeDetails: {
//     collegeName: string;
//     stablishYear: number;
//     isPopular: boolean;
//   };
// };

// let StudentDetails: StudentInfo = {
//   firstName: "Sohel",
//   lastName: "Rana",
//   id: 45,
// };

// let subjectDetails: SubjectInfo = {
//   major: "Web development",
//   subjectsCount: 3,
//   isStudent: true,
//   collegeDetails: {
//     collegeName: "Gaming PC",
//     stablishYear: 2000,
//     isPopular: true,
//   },
// };

// type PizzaDetails = {
//   name: string;
//   price: number;
//   id: number;
// };

// function pizzaDetail(pizzaObj: PizzaDetails): string {
//   // Destructure

//   let { name, price, id } = pizzaObj;

//   return `name: ${name} Price: ${price} id: ${id}`;
// }

// const pizza: PizzaDetails = {
//   name: "Chicken pizza",
//   price: 12,
//   id: 1,
// };

// const result = pizzaDetail(pizza);

// console.log(result);

type NameType = {
  firstName: string;
  lastName: string;
};
type AgeType = {
  age: number;
};

type DetailsType = NameType & AgeType;

function showPersonInfo(personObj: DetailsType): string {
  let { firstName, lastName, age } = personObj;

  return `Full name: ${firstName} ${lastName} and age is: ${age}`;
}

const personInfo: DetailsType = {
  firstName: "Max",
  lastName: "Payne",
  age: 42,
};

const result = showPersonInfo(personInfo);

console.log(result);
