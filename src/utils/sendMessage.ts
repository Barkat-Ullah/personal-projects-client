"use server"

import { backend } from "./backend";

interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}
export const sendContactMessage = async (data: ContactFormData) => {
  try {
    const response = await fetch(
      `${backend}/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, message: "Failed to send message" };
    }
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "An error occurred" };
  }
};
