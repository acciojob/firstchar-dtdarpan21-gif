function firstChar(text) {
	let trimmedText = text.trim();
	return trimmedText.charAt(0);
  // your code here
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
