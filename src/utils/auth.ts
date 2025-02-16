"use server";

import { backend } from "./backend";

export interface FormValues {
  email: string;
  password: string;
}

export const loggedinUser = async (data: FormValues) => {
  try {
    const res = await fetch(`${backend}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });
    console.log(res);

    if (!res.ok) {
      throw new Error("Login failed");
    }

    const userInfo = await res.json();
   
    return userInfo;
  } catch (error) {
    console.error("Login Error:", error);
    return { success: false, message: "Login failed" };
  }
};
