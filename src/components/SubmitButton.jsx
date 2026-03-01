function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full bg-blue-600 text-white p-2 rounded-md 
      hover:bg-blue-700 transition disabled:bg-gray-400"
    >
      {isSubmitting ? "Submitting..." : "Create Account"}
    </button>
  );
}

export default SubmitButton;


