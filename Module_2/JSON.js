const jsonString = '{"name": "Ken Miyano", "age": 20, "hobbies": "Tinkering with Computers"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.hobbies);
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);