// object type
// optional ? bebohar korte pari
var users;
users = [];
var user1;
user1 = { userName: "moon", userId: 152302 };
users.push(user1);
var user2;
user2 = { userName: "rana", userId: 31007 };
users.push(user2);
for (var key in users) {
    console.log(users[key]["userId"]);
}
