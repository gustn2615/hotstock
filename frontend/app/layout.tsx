import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import localfont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const Cafe24Ssurround = localfont({
    src: "./Cafe24Ssurround.ttf",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={Cafe24Ssurround.className}>
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
