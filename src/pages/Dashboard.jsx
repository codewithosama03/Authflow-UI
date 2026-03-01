import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        Welcome, {user?.name}
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded shadow">
          Projects: 12
        </div>
        <div className="bg-white p-6 rounded shadow">
          Tasks: 34
        </div>
        <div className="bg-white p-6 rounded shadow">
          Messages: 5
        </div>
      </div>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}