/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";


import { FormValues, loginUser } from "@/utils/actions/loginUser";
import { signIn } from "next-auth/react";
import Image from "next/image";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: any },
    } = useForm<FormValues>();
    const router = useRouter()

    const onSubmit = async (data: FormValues) => {

        console.log(data);
        return
        try {
            const res = await loginUser(data)
            if (res.accessToken) {
                alert(res.message)
                localStorage.setItem('accessToken', res.accessToken)
                router.push('/')
            }


        } catch (err: any) {
            console.error(err.message);
            throw new Error(err.message);
        }
    };

    return (
        <div className="pt-[120px] w-[90%] min-h-screen  mx-auto">


            <div className="w-full max-w-lg   p-[1px] rounded-2xl  mx-auto bg-background shadow-card">
                <div className="bg-black-100 z- rounded-2xl p-7">
                    <h1 className="text-center text-4xl  mb-5 font-bold">
                        Login <span className="text-accent">Here</span>   </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex text-center flex-col gap-8">
                        <div className="text-left">
                            <label
                                htmlFor="email"
                                className="block text-sm md:text-lg font-medium  text-white mb-4"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                placeholder="Email"
                                className="bg-tertiary py-2 px-6 border outline-tertiary focus:outline-gray-800 block w-full placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm md:text-lg font-medium"
                                required
                            />
                        </div>

                        <div className="text-left">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium md:text-lg text-white mb-4"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                {...register("password")}
                                placeholder="Password"
                                className="bg-tertiary py-2 px-6 border outline-tertiary focus:outline-gray-800 block w-full placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm md:text-lg font-medium"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-5/6 bg-tertiary text-sm md:text-lg hover:scale-105 border border-gray-800  font-semibold py-2 px-4 rounded-md shadow-md "
                            >
                                Login
                            </button>
                            {/* <button
                                    type="submit"
                                    className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
                                >
                                    Login
                                </button> */}
                        </div>
                    </form>

                    <p className="text-center mt-4 text-sm text-secondary">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-accent hover:underline">
                            Create an account
                        </Link>
                    </p>

                    <p className="text-center mt-6 text-sm text-secondary">
                        Or Sign Up Using
                    </p>

                    {/* Social Login Buttons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <button

                            onClick={() => signIn("google", {
                                callbackUrl: 'http://localhost:3000/dashboard'
                            })}

                            className="flex items-center justify-center w-12 h-12 bg-white-100 rounded-full shadow-md hover:bg-gray-200">
                            <Image
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                                width={30}
                                height={30}
                                alt="Google logo"
                            />
                        </button>
                        <button
                            onClick={() => signIn("github", {
                                callbackUrl: 'http://localhost:3000/dashboard'
                            })}
                            className="flex items-center justify-center w-12 h-12 bg-white-100 rounded-full shadow-md hover:bg-gray-200">
                            <Image
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                width={25}
                                height={25}
                                alt="GitHub logo"
                            />
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default LoginPage;
