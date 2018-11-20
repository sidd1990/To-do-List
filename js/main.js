function todoList() {
	//store user value
	var item = document.getElementById("todoInput").value;

	// create text from the user input
	var text = document.createTextNode(item);

	//create li tag
	var newItem = document.createElement("li");

	// append the li to the todo list id tag
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
}