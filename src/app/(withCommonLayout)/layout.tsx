import Hero from "@/components/Hero";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";




export const metadata: Metadata = {
    title: "Ikhtiaj arif",
    description: "Ikhtiaj arif portfolio",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)

    return (
        <>
            <div className="bg-hero-pattern bg-cover bg-no-repeat mt-[76px] bg-center">
                <Navbar session={session} />
                <Hero />
            </div>
            <div className="min-h-screen max-w-7xl mx-auto">

                {children}
            </div>
            <Footer />
        </>

    );
}
