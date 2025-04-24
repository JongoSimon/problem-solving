
//? creating an Array with books

let favoriteBooks = [
    "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice",
    "The Hobbit"
];

//? adding a book in the Array.
favoriteBooks.push("The dragon fly ");
console.log(favoriteBooks);

//? removing the bokk in array
favoriteBooks.pop();
console.log(favoriteBooks);

//? using the Unshift method to add a book on top 
favoriteBooks.unshift("the lion is still in the bush");
console.log(favoriteBooks);

//? using shift to remove first book in array
favoriteBooks.shift();
console.log(favoriteBooks);

//? Display the final array
console.log("My Favorite Books:", favoriteBooks);


//? creating an array with a list for colors

let colors = [
    "red",
    "blue",
    "white",
    "green",
    "yellow"
];
console.log(colors)

//? remove colors using pop
colors.pop();
console.log(colors);

let removedColor = colors.pop();

//? log the removed color
console.log("Removed color:", removedColor);

//? log the updated array
console.log("Updated Colors Arrays:", colors)


//?creating an array of name and greetings

let name = [
    "john",
    "Mitchell",
    "Ngah",
    "Okafor",
    "Chinedu"
];
console.log(name)

//? loop through each name and gree them
for (let i = 0; i < name.length; i++) {
    console.log(`Hello, ${name[i]}`);
}