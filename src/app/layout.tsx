import React from "react";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
    variable: "--font-karla",
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
            className={`${karla.className} antialiased min-h-screen bg-background text-base`}
        >
        <div>{children}</div>
        </body>
        </html>
    );
}
