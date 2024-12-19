// Function to perform multi-dimensional array restructuring
function restructureArray() {
    // Prompt the user to enter names separated by commas
    let namesInput = prompt("Enter names separated by commas (e.g., Genevieve, Juan, Luna, Gabriel, Elise):");
    
    // Convert the input string into an array of names
    let names = namesInput.split(",").map(name => name.trim());
    
    // Prompt the user to enter ages separated by commas
    let agesInput = prompt("Enter ages separated by commas (e.g., 24, 65, 21, 5, 9):");
    
    // Convert the input string into an array of numbers (ages)
    let ages = agesInput.split(",").map(age => parseInt(age.trim(), 10));
    
    // Check if the arrays have the same length
    if (names.length !== ages.length) {
      console.error("Error: The number of names and ages must match.");
      return;
    }
    
    // Restructure into a new multi-dimensional array
    let restructuredArray = names.map((name, index) => [name, ages[index]]);
    
    // Log the restructured array to the console, one [name, age] per line
    console.log("Restructured Multi-Dimensional Array:");
    restructuredArray.forEach(pair => {
      console.log(pair);
    });
  }
  
  // Call the function to execute the operations
  restructureArray();
  