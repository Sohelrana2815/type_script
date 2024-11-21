// User defined type: Union type 

let userId: string | number | boolean;

userId = "123456";
userId = 123456;
userId = true;

function displayUserInfo(userId: string | number) {
  console.log(userId);
}

displayUserInfo("John");
displayUserInfo(123);
