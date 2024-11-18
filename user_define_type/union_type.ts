function checkValue(input: string | boolean) {
  if (typeof input === "string") {
    console.log(`String value: ${input.toUpperCase()}`);
  } else {
    console.log(`Boolean value: ${input ? "True" : "False"}`);
  }
}

checkValue("Hello");
checkValue(true);
