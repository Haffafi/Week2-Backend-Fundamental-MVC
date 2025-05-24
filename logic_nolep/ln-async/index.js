const users = [
  { id: 1, username: "john_doe" },
  { id: 2, username: "jane_smith" },
  { id: 3, username: "alice" },
];

// Implementasi Callback
function getUserDataCallback(userId, callback) {
  for (key of users) {
    if (key.id == userId) {
      const user = key;
      return callback(user);
    }
  }
}

// Implementasi Promise
function getUserDataPromise(userId) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id == userId);
    if (user != undefined) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
}

// Implementasi Async/Await
async function getUserDataAsync(userId) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id == userId);
    if (user != undefined) {
      resolve(user);
    } else {
      reject("User not found");
    }
  });
}

// Test Case Callback
getUserDataCallback(1, (user) => {
  console.log("Callback Result:", user);
  // Output: Callback Result: { id: 1, username: 'john_doe' }
});

// Test Case Promise
getUserDataPromise(2)
  .then((user) => {
    console.log("Promise Result:", user);
    // Output: Promise Result: { id: 2, username: 'jane_smith' }
  })
  .catch((error) => {
    console.error(error);
  });

// Test Case Async/Await
(async () => {
  try {
    const user = await getUserDataAsync(3);
    console.log("Async/Await Result:", user);
    // Output: Async/Await Result: { id: 3, username: 'alice' }
  } catch (error) {
    console.log(error);
  }
})();
