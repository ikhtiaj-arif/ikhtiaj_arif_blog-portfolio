"use server";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = async (data: UserData) => {
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const userInfo = await res.json();

  return userInfo;
};
