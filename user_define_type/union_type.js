function checkValue(input) {
    if (typeof input === "string") {
        console.log("String value: ".concat(input.toUpperCase()));
    }
    else {
        console.log("Boolean value: ".concat(input ? "True" : "False"));
    }
}
checkValue("Hello");
checkValue(true);
