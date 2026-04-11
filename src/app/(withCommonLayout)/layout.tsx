import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
    title: "Ikhtiaj Arif - Portfolio",
    description: "Full Stack Developer Portfolio",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession(authOptions)

    return (
        <div className="relative z-0 min-h-screen pt-[76px] flex flex-col">
            <Navbar session={session} />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6">
                {children}
            </main>
            <Footer />
        </div>
    );
}
