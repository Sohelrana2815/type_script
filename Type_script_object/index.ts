type PersonNameType = {
  firstName: string;
  lastName: string;
};

type PersonIdentityType = {
  id: number;
  age: number;
};

type PersonFullDetails = PersonNameType & PersonIdentityType;

function personDetails(personObj: PersonFullDetails): string {
  let { firstName, lastName, id, age } = personObj;
  return `Person details: Person full name is ${firstName} ${lastName} he/she is ${age} years old. His/Her id is: ${id}`;
}

let personInfo: PersonFullDetails = {
  firstName: "Sam",
  lastName: "Online",
  id: 101,
  age: 28,
};

const result = personDetails(personInfo);
console.log(result);
