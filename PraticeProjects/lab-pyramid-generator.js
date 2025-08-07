function pyramid(char, steps, isUpDown) {
  let str = '\n'; // Start with newline

  if (isUpDown) {
    // Upside-down pyramid
    for (let row = steps; row >= 1; row--) {
      // spaces
      for (let s = 0; s < steps - row; s++) {
        str += ' ';
      }

      // characters
      for (let c = 0; c < 2 * row - 1; c++) {
        str += char;
      }

      str += '\n';
    }
  } else {
    // Upright pyramid
    for (let row = 1; row <= steps; row++) {
      // spaces
      for (let s = 0; s < steps - row; s++) {
        str += ' ';
      }

      // characters
      for (let c = 0; c < 2 * row - 1; c++) {
        str += char;
      }

      str += '\n';
    }
  }

  return str;
}
