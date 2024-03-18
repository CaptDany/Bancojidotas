//function to add users
function addUser(users, user) {
    users.push(user);
    return users;
}
//calling the function with some data
let users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
];

addUser(users, { name: 'Mark', age: 35 });
console.log(users);
