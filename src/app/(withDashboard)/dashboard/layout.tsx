
import Sidebar from "@/components/shared/SideBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ikhtiaj arif",
    description: "Ikhtiaj arif portfolio",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <div className="min-h-screen">
            <div className="flex ">
                <div className="w-[17%]">
                    <Sidebar />
                </div>
                <div className="w-[83%] rounded-xl">{children}</div>
            </div>
        </div>
    );
}
