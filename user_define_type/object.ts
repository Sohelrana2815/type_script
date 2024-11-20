// object type
// optional ? bebohar korte pari

let users: object[];

users = [];

let user1: { userName: string; userId: number };

user1 = { userName: "moon", userId: 152302 };

users.push(user1);

let user2: { userName: string; userId: number };

user2 = { userName: "rana", userId: 31007 };

users.push(user2);

for (const key in users) {
  console.log(users[key]["userId"]);
}
