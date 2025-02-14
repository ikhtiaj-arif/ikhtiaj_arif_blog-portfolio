"use server";

export type FormValues = {
  email: string;
  password: string;
};

export const loginUser = async (data: FormValues) => {
  const res = await fetch(`https://blog-server-l2a3.vercel.app/api/login`, {
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
