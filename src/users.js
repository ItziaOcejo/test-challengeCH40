// Imports small array of users
// Pretend it's an API request
const users = require("../src/data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

// Simulates fetching user data using a promise
const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    const user = getUser(id);
    if (user) {
      // Simulate API delay with setTimeout
      setTimeout(() => {
        resolve(user);
      }, 1000); // Resolve after 1 second (simulated delay)
    } else {
      reject(new Error("User not found")); // Reject if user not found
    }
  });
};

module.exports = { getUsers, getUser, getUserData };
