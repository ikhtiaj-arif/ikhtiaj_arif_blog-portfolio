import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ikhtiaj arif",
  description: "Ikhtiaj arif portfolio",
  icons: {
    icon: "/favicon.ico", // Standard favicon
    apple: "/apple-touch-icon.png", // Apple devices
    shortcut: "/favicon-32x32.png", // Browser shortcuts
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative z-0 bg-primary`}
      >

        {children}
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat mt-[76px] bg-center">
          <Navbar session={session} />
          <Hero />
        </div>
        <div className="min-h-screen max-w-7xl mx-auto">

          {children}
        </div> */}
      </body>
    </html>
  );
}
