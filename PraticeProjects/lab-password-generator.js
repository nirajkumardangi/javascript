function generatePassword(passLength) {
  let str = '';
  const passChar =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  for (let i = 0; i < passLength; i++) {
    let index = Math.floor(Math.random() * passChar.length);
    str += passChar[index];
  }
  return str;
}

const password = generatePassword(5);
console.log('Generated password: ' + password);
