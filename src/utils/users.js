const users = [];

const addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate username
  if (existingUser) {
    return {
      error: "Username already in use!",
    };
  }

  // Store user
  const user = { id, username, room };
  users.push(user);
  return { user };
};

// Remove user (findindex it gives the position in the array)
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

// Get user by id
const getUser = (id) => {
  return users.find((user) => user.id === id);
};

// Get users room
const getUsersInRoom = (room) => {
  room = room.trim(room).toLowerCase();
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
