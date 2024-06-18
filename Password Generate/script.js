document.getElementById("generateBtn").addEventListener("click", function () {
  const length = parseInt(document.getElementById("pass").value);
  const includeUpperCase = document.getElementById("upper").checked;
  const includeLowerCase = document.getElementById("lower").checked;
  const includeNumbers = document.getElementById("num").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  if (length < 5 || length > 15) {
    document.getElementById("display").textContent = "Password length must be between 6 to 15 characters.";
    return;
  }

  const password = generatepassword(
    length,
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("display").textContent = password;
});

function generatepassword(
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+";

  let chars = "";
  if (includeUpperCase) chars += upperCaseChars;
  if (includeLowerCase) chars += lowerCaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  if (chars === "") {
    return "Please select at least one character type.";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}