type PasswordsList = {
  [username: string]: string;
};

const passwordsList: PasswordsList = {
  zucker: "123456",
  felon: "123123",
  robon: "secret",
};

export const authenticateUser = (
  username: string,
  password: string
): boolean => {
  // Find the user with the provided username
  const userPassword = passwordsList[username];

  // If the user doesn't exist, or the password doesn't match, return false
  if (userPassword !== password) {
    return false;
  }

  return true;
};
