// Calculate average of test scores
function getAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

// Return letter grade based on numeric score
function getGrade(score) {
  if (score === 100) {
    return 'A+';
  } else if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Check if score is passing (not an "F")
function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== 'F';
}

// Return full message with average, grade, and pass/fail
function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);

  let message = 'Class average: ' + average + '. Your grade: ' + grade + '. ';
  if (passed) {
    message += 'You passed the course.';
  } else {
    message += 'You failed the course.';
  }

  return message;
}
