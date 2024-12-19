// Function to implement the Bubble Sort Algorithm
function bubbleSort(array) {
    const length = array.length;
    let comparisons = []; // To store the comparison process
    
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        // Store the comparison process
        comparisons.push(`Comparing ${array[j]} and ${array[j + 1]}`);
        
        // Swap if the current element is greater than the next
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    
    return { sortedArray: array, comparisons };
  }
  
  // Main function to populate and sort the array
  function main() {
    let numbers = []; // Array to store numbers
    
    // Populate the array using prompt and push
    for (let i = 0; i < 10; i++) {
      let num = parseInt(prompt(`Enter number ${i + 1} (e.g., 42):`), 10);
      if (!isNaN(num)) {
        numbers.push(num);
      } else {
        console.log("Invalid input, please enter a number.");
        i--; // Retry for invalid input
      }
    }
    
    console.log("Original Array:", numbers);
    
    // Perform Bubble Sort
    const { sortedArray, comparisons } = bubbleSort(numbers);
    
    // Log the comparisons
    console.log("Comparison Process:");
    comparisons.forEach(comparison => console.log(comparison));
    
    // Log the sorted array
    console.log("Sorted Array:", sortedArray);
  }
  
  // Call the main function
  main();
  