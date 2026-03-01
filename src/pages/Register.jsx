import { useState } from "react";
import useRegisterForm from "../hooks/useRegisterForm";

export default function Register() {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    password,
  } = useRegisterForm();

  const [showPassword, setShowPassword] = useState(false);

  const getStrength = () => {
    if (!password) return "";
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  const strength = getStrength();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-lg w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>

        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email",
            },
          })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Min 6 characters",
              },
            })}
            placeholder="Password"
            className="w-full p-2 border rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-2 text-sm"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {password && (
          <div className="text-sm">
            Strength:{" "}
            <span
              className={
                strength === "Weak"
                  ? "text-red-500"
                  : strength === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }
            >
              {strength}
            </span>
          </div>
        )}

        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded disabled:bg-gray-400"
        >
          {isSubmitting ? "Submitting..." : "Create Account"}
        </button>
      </form>
    </div>
  );
}