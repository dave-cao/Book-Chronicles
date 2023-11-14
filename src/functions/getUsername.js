import generateName from "./generateName";

const getUsername = () => {
  const storedUsername = localStorage.getItem("username")
  if (storedUsername !== "null" && storedUsername) {
    return storedUsername;
  } else {
    let newUsername = prompt("What is your name? (display name for posts/comments)")

    // if user refuses to give name, give them a random one
    if (!newUsername) {
      // generate random name
      newUsername = generateName();
    }
    localStorage.setItem("username", newUsername);
    return newUsername;
  }
}

export default getUsername;
