const textareaInput = document.getElementById('text-input');
const outputArea = document.getElementById('char-count');
const MAX_CHAR = 50;

textareaInput.addEventListener('input', () => {
  let text = textareaInput.value;

  // Trim extra characters beyond limit
  if (text.length >= MAX_CHAR) {
    text = text.substring(0, MAX_CHAR);
    textareaInput.value = text;
  }

  const count = text.length;

  outputArea.textContent = `Character Count: ${count}/${MAX_CHAR}`;

  if (count === MAX_CHAR) {
    outputArea.classList.add('limit-reached');
  } else {
    outputArea.classList.remove('limit-reached');
  }
});
