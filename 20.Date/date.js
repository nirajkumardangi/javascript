const today = new Date().toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});
console.log(today); // Saturday, September 21, 2024


const timeNow = new Date().getFullYear(); // 2024
const timeNow2 = new Date().getFullYear() + 2; // 2026 (2024 + 2);

// we can find difference b/w two date.
console.log(timeNow - timeNow2); // -2
console.log(timeNow.valueOf() - timeNow2.valueOf()); // -2