import { jwtDecode } from "jwt-decode";

export const getUserFromToken = () => {
  if (typeof window === "undefined") {
    return null; 
  }

  try {
    const token = localStorage.getItem("token");

    if (!token) return null;

    // ✅ Decode the token safely
    const decoded = jwtDecode<{ id: string; role: string }>(token);
    return decoded;
  } catch (error) {
    console.error("Invalid Token:", error);
    return null;
  }
};
