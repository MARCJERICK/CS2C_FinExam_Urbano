// Function to emulate stack operations
function groceryStackOperations() {
    // Initialize an empty stack (array)
    const stack = [];
  
    // Function to check if the stack is empty or to return the last item (peek)
    function peek() {
      if (stack.length === 0) {
        console.log("The stack is empty.");
        return null;
      } else {
        console.log(`Top of the stack: ${stack[stack.length - 1]}`);
        return stack[stack.length - 1];
      }
    }
  
    // Function to add an item to the stack (push)
    function push(item) {
      stack.push(item);
      console.log(`Item added: ${item}`);
      console.log("Updated Stack:", stack);
      peek(); // Check the top of the stack after the push
    }
  
    // Function to remove the last added item from the stack (pop)
    function pop() {
      if (stack.length === 0) {
        console.log("Cannot remove item - The stack is empty.");
      } else {
        const removedItem = stack.pop();
        console.log(`Item removed: ${removedItem}`);
        console.log("Updated Stack:", stack);
        peek(); // Check the top of the stack after the pop
      }
    }
  
    // Prompt the user to input five grocery items
    for (let i = 0; i < 5; i++) {
      const item = prompt(`Enter grocery item ${i + 1}:`);
      push(item); // Add each item to the stack
    }
  
    // Example: Demonstrate pop operation after adding all items
    console.log("\nPerforming a pop operation...");
    pop();
  
    console.log("\nPerforming another pop operation...");
    pop();
  }
  
  // Call the function to execute stack operations
  groceryStackOperations();
  