import FormError from "./FormError";

function FormInput({
  label,
  type = "text",
  register,
  name,
  rules,
  error,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>

      <input
        type={type}
        {...register(name, rules)}
        className={`w-full p-2 border rounded-md outline-none 
        ${error ? "border-red-500" : "border-gray-300"}`}
      />

      <FormError error={error} />
    </div>
  );
}

export default FormInput;
