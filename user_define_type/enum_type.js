// enum - store constants; duplicate value is not allowed here
// ami enum er value k 2 vabe access korte pari . die othoba array die
// enum types: numeric, string, heterogenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["ReadData"] = 1] = "ReadData";
    RequestType[RequestType["SaveData"] = 2] = "SaveData";
    RequestType[RequestType["DeleteData"] = 3] = "DeleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.DeleteData);
// console.log(RequestType["ReadData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_DATA";
    RequestType2["saveData"] = "SAVE_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2['saveData']);
// heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_DATA";
    RequestType3["saveData"] = "SAVE_DATA";
    RequestType3[RequestType3["id"] = 102] = "id";
})(RequestType3 || (RequestType3 = {}));
