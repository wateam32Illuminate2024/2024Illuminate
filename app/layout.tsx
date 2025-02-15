import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Keep it Real",
    description: "A browser extension to help you find trustworthy websites.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="flex min-h-screen flex-col items-center justify-between m-0 p-0">
                    <Navbar />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    );
}
