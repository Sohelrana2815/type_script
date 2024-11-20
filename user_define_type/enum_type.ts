// enum - store constants; duplicate value is not allowed here

// ami enum er value k 2 vabe access korte pari . die othoba array die

// enum types: numeric, string, heterogenous

// numeric enum

enum RequestType {
  ReadData = 1,
  SaveData,
  DeleteData,
}

// console.log(RequestType);
// console.log(RequestType.DeleteData);
// console.log(RequestType["ReadData"]);

// string enum

enum RequestType2 {
  readData = "Read_DATA",
  saveData = "SAVE_DATA",
  deleteData = "DELETE_DATA",
}

// console.log(RequestType2['saveData']);

// heterogenous enum

enum RequestType3 {
  readData = "Read_DATA",
  saveData = "SAVE_DATA",
  id = 102,
}


