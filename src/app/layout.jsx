import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Learning Next",
    description: "Generated using create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} `}>
                <Navbar />
                <main className="sm:px-8 sm:py-4 px-4 py-2 ">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
