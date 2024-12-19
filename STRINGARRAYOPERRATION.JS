function checkPalindrome() {
    // Prompt the user to enter words separated by commas
    let words = prompt("Enter words separated by commas (e.g., RACECAR, RECORDER):");
    
    // Check if the user entered any input
    if (words) {
      // Split the input string into an array of words
      // Use .map() to trim spaces from each word
      let wordArray = words.split(",").map(word => word.trim());
      
      // Iterate through each word in the array
      wordArray.forEach(word => {
        // Reverse the current word and compare it to the original
        let reversedWord = word.split("").reverse().join(""); // Reverse the string
        if (word === reversedWord) {
          // Log to the console if the word is a palindrome
          console.log(`${word} is a palindrome.`);
        } else {
          // Log to the console if the word is not a palindrome
          console.log(`${word} is not a palindrome.`);
        }
      });
    } else {
      // Log a message if the user didn't enter any input
      console.log("No words were entered.");
    }
  }
  
  // Call the function to start the palindrome check
  checkPalindrome();
  