let result = {};

const insertItem = (key, value) => {
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // return the value from result that is associated with key
  if (result[key] == undefined) return "Item does not exist";
  return result[key];
};

const printItems = () => {
  // return a string of the concatenated key in result, separated by commas
  let values = [];
  for (const element in result) {
    values.push(element);
  }
  return values.join(", ");
};

insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");
console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");
console.log(printItems());
// expected: 'hello, sit' (order may be different)
console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
