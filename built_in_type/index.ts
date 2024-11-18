// built_in data type: number,string,boolean, void, undefine, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Sohel";
lastName = " Rana";
isActivated = true;

fullName = firstName.concat(lastName);

console.log(
  `your id: ${userId}, username: ${fullName}, account activated: ${isActivated}`
);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLocaleLowerCase());

function display(): void {
  console.log("Hi i am display");
}

display();
