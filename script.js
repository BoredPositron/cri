const words = [
    "hunky",
    "coo",
    "olive"
  ];
  
  const answer1 = "i love you poorna";
  
  // Function to scramble the letters of a word
  function shuffleWord(word) {
    const arr = word.split("");
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join("");
  }
  
  // Function to display the jumbled words
  function displayJumbleWord() {
    let jumbleWords = "";
    for (let i = 0; i < words.length; i++) {
      jumbleWords += shuffleWord(words[i]) + " ";
    }
    document.getElementById("jumble-word-text").textContent = jumbleWords;
  }
  
  // Function to check the user's answer
  function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value.toLowerCase();
    if (userAnswer === answer1) {
        window.location.href = "cert.png";
    }else {
      alert("Incorrect! Please try again")
    }
  }
  
  // Display the jumbled words on page load
  window.onload = displayJumbleWord;
  