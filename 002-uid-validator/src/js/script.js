function validateUID() {
    // This function validates a user ID.
  
    // Get the user ID from the input field.
    let uid = document.getElementById("uidInput").value;
  
    // Get the result element.
    let result = document.getElementById("uidResult");
  
    // Validate the user ID.
    if (uidValidator(uid)) {
      // The user ID is valid.
      result.textContent = "Valid";
    } else {
      // The user ID is invalid.
      result.textContent = "Invalid";
    }
  }
  
  function uidValidator(uid) {
    // This function validates a user ID.
  
    // Check the length of the user ID.
    if (uid.length !== 10) {
      // The user ID must be 10 characters long.
      return false;
    }
  
    // Count the number of uppercase characters and digits in the user ID.
    let uppercaseCount = 0;
    let digitCount = 0;
  
    for (let i = 0; i < uid.length; i++) {
      let char = uid[i];
  
      // Check if the character is an uppercase character.
      if (char >= 'A' && char <= 'Z') {
        uppercaseCount++;
      }
  
      // Check if the character is a digit.
      if (char >= '0' && char <= '9') {
        digitCount++;
      }
    }
  
    // Check if the user ID contains at least 2 uppercase characters and 3 digits.
    if (uppercaseCount < 2 || digitCount < 3) {
      // The user ID must contain at least 2 uppercase characters and 3 digits.
      return false;
    }
  
    // Check if the user ID contains any repeated characters.
    let uniqueChars = {};
    for (let i = 0; i < uid.length; i++) {
      let char = uid[i];
  
      // If the character is already in the map, the user ID contains a repeated character.
      if (uniqueChars[char]) {
        return false;
      }
  
      uniqueChars[char] = true;
    }
  
    // Check if the user ID contains only alphanumeric characters.
    let uidRegex = /^[a-zA-Z0-9]{10}$/;
    return uidRegex.test(uid);
  }
  