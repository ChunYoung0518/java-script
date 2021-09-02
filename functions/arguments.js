function addingMachine() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    var number = arguments[i];

    if (typeof number === "number") {
      total += number;
    }
  }

  return total;
}
