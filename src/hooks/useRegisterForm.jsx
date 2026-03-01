import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/fakeApi";
import toast from "react-hot-toast";

export default function useRegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      await registerUser(data);

      toast.success("Account created successfully ");

      localStorage.setItem("user", JSON.stringify(data));

      navigate("/success");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    password,
  };
}