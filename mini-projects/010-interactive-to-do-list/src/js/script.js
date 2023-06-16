
let count = 1;

// add a new task to the list
function addToList() {

    let item = document.getElementById("itemInput").value;
  
    // Create a new list item
    let list = document.createElement("div");
    list.textContent = `${count} ${item}`;
    list.classList.add("list"); // Add the "list" class to the <li> element
  
    let itemList = document.getElementById("itemList");
  
    if (item === "") { // check if the user entered a task
      alert("Please enter a task!");
    } else {
      itemList.appendChild(list);
      count += 1;
    }
  
    document.getElementById("itemInput").value = "";
  }
  