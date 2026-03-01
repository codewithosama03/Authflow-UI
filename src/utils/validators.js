export const emailPattern = {
  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  message: "Invalid email format",
};

export const passwordRules = {
  required: "Password is required",
  minLength: {
    value: 6,
    message: "Minimum 6 characters required",
  },
};


