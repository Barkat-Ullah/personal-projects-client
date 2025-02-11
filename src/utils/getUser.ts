import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const decoded = jwtDecode(token) as { id: string; role: string };;
    return decoded;
  } catch (error) {
    console.error("Invalid Token:", error);
    return null;
  }
};
