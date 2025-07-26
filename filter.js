var numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("number array: ", numberArray);

function above5Filter() {
  return value > 5;
}
var filteredNumberArray = numberArray.filter(above5Filter);
console.log("Filtered number array: ", filteredNumberArray);

var shoppingList = [
  "milk", "Donuts", "Chocolate", "peanut Butter", "Pepto Bismol",
  "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("shopping List: ", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
  return value.indexof(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("searched Shopping List: ", searchedShoppingList);
