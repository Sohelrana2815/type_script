// Custom type
var users;
users = [];
var user1;
(user1 = {
    userName: "Sohel Rana",
    userId: 3260,
}),
    users.push(user1);
var user2;
(user2 = {
    userName: "Tech helpful",
    userId: 1051,
}),
    users.push(user2);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
