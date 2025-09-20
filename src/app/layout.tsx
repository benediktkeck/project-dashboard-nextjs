import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Project Dashboard",
    icons: [
        { rel: "icon", url: "/icon.png" },
        { rel: "apple-touch-icon", url: "/apple-icon.png" },
    ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="de" suppressHydrationWarning>
        <body
            className={`${inter.className} antialiased min-h-screen bg-background text-base`}
        >
        <div className={"min-h-screen h-full md:pl-80 md:m-5 md:ml-10"}>
            <Sidebar />
            {children}
        </div>
        </body>
        </html>
    );
}
