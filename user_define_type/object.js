// Object type
var users;
users = [];
var user1;
var user2;
(user1 = {
    userName: "Sohel Rana",
    userId: 3260,
    isActive: true,
}),
    (user2 = {
        userName: "Tech helpful",
        userId: 1051,
    }),
    users.push(user1);
users.push(user2);
for (var key in users) {
    console.log(users[key]["userId"]);
}
