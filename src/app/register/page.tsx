/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerUser, UserData } from "@/utils/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";



const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors: any },
    } = useForm<UserData>();

    const router = useRouter()

    const onSubmit = async (data: UserData) => {


        try {
            const res = await registerUser(data)
            if (res.success) {
                alert(res.message)
                router.push('/login')
            }


        } catch (err: any) {
            console.error(err.message);
            throw new Error(err.message);
        }
    };

    return (
        // <div className="my-10">
        //   <h1 className="text-center text-4xl font-bold mb-5">
        //     Register <span className="text-teal-500">Now</span>
        //   </h1>
        //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        //     <div>

        //     </div>

        //     <div className="w-[80%] mx-auto bg-white p-6 shadow-lg rounded-lg">
        //       <form onSubmit={handleSubmit(onSubmit)}>
        //         <div className="mb-4">
        //           <label className="block text-gray-700 font-medium mb-2">
        //             Full Name
        //           </label>
        //           <input
        //             type="text"
        //             {...register("username")}
        //             placeholder="User Name"
        //             className="w-full p-3 border border-gray-300 rounded "
        //             required
        //           />
        //         </div>

        //         <div className="mb-4">
        //           <label className="block text-gray-700 font-medium mb-2">
        //             Email
        //           </label>
        //           <input
        //             type="email"
        //             {...register("email")}
        //             placeholder="Email"
        //             className="w-full p-3 border border-gray-300 rounded "
        //             required
        //           />
        //         </div>

        //         <div className="mb-6">
        //           <label className="block text-gray-700 font-medium mb-2">
        //             Password
        //           </label>
        //           <input
        //             {...register("password")}
        //             type="password"
        //             placeholder="Password"
        //             className="w-full p-3 border border-gray-300 rounded "
        //             required
        //           />
        //         </div>

        //         <div className="mb-4">
        //           <button
        //             type="submit"
        //             className="w-full border border-teal-500 text-teal-500 font-semibold py-2 px-4 rounded-md shadow-md hover:bg-teal-500 hover:text-black"
        //           >
        //             Register
        //           </button>
        //         </div>

        //         <p className="text-center text-gray-600">
        //           Already have an account?{" "}
        //           <Link className="text-teal-500 hover:underline" href="/login">
        //             Login
        //           </Link>
        //         </p>
        //       </form>
        //     </div>
        //   </div>
        // </div>

        <div className="pt-[120px] w-[90%] min-h-screen  mx-auto">


            <div className="w-full max-w-lg   p-[1px] rounded-2xl  mx-auto bg-background shadow-card">
                <div className="bg-black-100 z- rounded-2xl p-7">
                    <h1 className="text-center text-4xl  mb-5 font-bold">
                        Register <span className="text-accent">Now</span>   </h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex text-center flex-col gap-8">
                        <div className="text-left">
                            <label
                                htmlFor="username"
                                className="block text-sm md:text-lg font-medium  text-white mb-4"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                {...register("username")}
                                placeholder="User Name"
                                className="bg-tertiary py-2 px-6 border outline-tertiary focus:outline-gray-800 block w-full placeholder:text-secondary text-white rounded-lg outline-none border-none text-sm md:text-lg font-medium"
                                required
                            />
                        </div>
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
                                Register
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
                        Already have an account?{" "}
                        <Link href="/login" className="text-accent hover:underline">
                            Login
                        </Link>
                    </p>

                   
                   
                </div>
            </div>



        </div>
    );
};

export default RegisterPage;
