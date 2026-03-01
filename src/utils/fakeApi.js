export function registerUser(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.email === "error@test.com") {
        reject({ message: "Email already exists" });
      } else {
        resolve({ message: "User registered successfully" });
      }
    }, 2000);
  });
}