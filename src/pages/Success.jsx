import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Account Created Successfully!!
      </h1>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-blue-500 text-white px-6 py-2 rounded"
      >
        Go to Dashboard
      </button>
    </div>
  );
}