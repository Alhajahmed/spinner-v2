const symbols = ["|", "/", "-", "\\", "|", "/", "\\", "|"];
let delay = 100;
for (const symbol of symbols) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}   `);
  }, delay);
  delay += 100;
}
