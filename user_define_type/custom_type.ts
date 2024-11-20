// Custom type

type User = { userName: string; userId: number };

let users: User[];

users = [];

let user1: User;

(user1 = {
  userName: "Sohel Rana",
  userId: 3260,
}),
  users.push(user1);

let user2: User;

(user2 = {
  userName: "Tech helpful",
  userId: 1051,
}),
  users.push(user2);

//   console.log(users);

type RequestType = "GET" | "POST";

let getRequest: RequestType;

getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}

requestHandler("GET");



