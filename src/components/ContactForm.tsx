/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
type FormValues = {
    name: string;
    email: string;
    message: string;
};
const ContactForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>();



    const onSubmit: SubmitHandler<FormValues> = async (data: FieldValues) => {
        try {
            const storedSession = localStorage.getItem("session");
            if (!storedSession) {
                throw new Error("User session not found. Please log in again.");
            }
            const session = JSON.parse(storedSession);
            const userEmail = session?.user?.email;

            if (!userEmail) {
                throw new Error("User email not found in session.");
            }
            data.user = userEmail;

            const response = await fetch(`https://blog-server-l2a3.vercel.app/api/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            alert("Message sent successfully!");
            reset();
        } catch (error: any) {
            alert(error.message);
        }
    };
    return (
        <div> <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="What's your name?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>

            <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea
                    rows={7}
                    {...register("message", { required: "Message is required" })}
                    placeholder="What do you want to say?"
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </label>

            <button
                type="submit"
                className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send"}
            </button>
        </form>


        </div>
    );
};

export default ContactForm;