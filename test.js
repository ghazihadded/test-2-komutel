const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("vitesse initial?", (vitesse) => {
  let result = 150.0 / vitesse;
  readline.question(`les feux?`, async (feus) => {
    feus
      .trim()
      .split(" ")
      .forEach((el) => {
        el = Number(el);
        if (Number.parseInt(result / el) % 2 == 0) {
          result += 150.0 / vitesse;
        } else {
          if (result % el == 0) {
            result += el + 150.0 / vitesse;
          } else {
            result += el - (result % el) + 150.0 / vitesse;
          }
        }
      });
    await console.log(result);
    readline.close();
  });
});
