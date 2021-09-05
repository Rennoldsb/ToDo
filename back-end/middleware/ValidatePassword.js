const ValidatePassword = (inputText) => {
  const passwordFormat =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!-_@#$%^&*]{7,15}$/;
  if (inputText.match(passwordFormat)) {
    return true;
  } else {
    return false;
  }
};

module.exports = ValidatePassword;
