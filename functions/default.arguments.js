function speaksomething(what = "default value", howMany) {
  for (var i = 0; i < howMany; i++) {
    console.log(what + " " + i);
  }
}
