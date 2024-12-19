// Function to perform the required operations
function sortArrayOperations() {
    // Prompt the user to enter numbers separated by commas
    let numbersInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
    
    // Convert the input string into an array of numbers
    let numbers = numbersInput.split(",").map(num => parseInt(num.trim(), 10));
    
    // Prompt the user to enter names separated by commas
    let namesInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");
    
    // Convert the input string into an array of names
    let names = namesInput.split(",").map(name => name.trim());
    
    // Merge the numbers and names arrays into a single array
    let mergedArray = numbers.concat(names);
    console.log("Merged Array:", mergedArray);
    
    // Sort numbers numerically in reverse order
    let sortedNumbers = [...numbers].sort((a, b) => b - a); // Sorting numbers in descending order
    console.log("Numbers sorted in reverse order:", sortedNumbers);
    
    // Sort names alphabetically
    let sortedNames = [...names].sort(); // Alphabetical sorting
    console.log("Names sorted alphabetically:", sortedNames);
  }
  
  // Call the function to execute the operations
  sortArrayOperations();
  