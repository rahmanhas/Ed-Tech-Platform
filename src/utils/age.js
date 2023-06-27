function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
  
    let age = today.getFullYear() - birthDate.getFullYear();
  
    // Check if the birthday hasn't occurred yet this year
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth()
      || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  
    // If the birthday hasn't occurred yet, subtract 1 from the age
    if (!hasBirthdayPassed) {
      age--;
    }
  
    return age;
  }
  