"use server";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

export const registerUser = async (data: UserData) => {
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/register`, {
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
