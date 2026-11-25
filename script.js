function highlight() {
  // Select all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');

  // Loop through each element and change its color to green
  boldWords.forEach((word) => {
    word.style.color = 'rgb(0, 128, 0)';
  });
}

function return_normal() {
  // Select all <strong> elements in the document
  const boldWords = document.querySelectorAll('strong');

  // Loop through each element and revert its color to black
  boldWords.forEach((word) => {
    word.style.color = 'rgb(0, 0, 0)';
  });
}
