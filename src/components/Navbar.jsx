import { NavLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
    const session = null;
    return (
        <nav className="flex justify-between items-center  mt-5 w-full sm:px-8 sm:py-4 px-4 py-2 ">
            <div className="flex justify-between items-center gap-4 ">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={150}
                        height={50}
                        alt="logo"
                    />
                </Link>
                <ul className="gap-4 hidden sm:flex">
                    {NavLinks.map((link) => (
                        <Link
                            key={link}
                            href={link.href}
                        >
                            <li className="font-semibold ">{link.text}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="">
                {session ? (
                    <div className="flex gap-4">
                        User Photo
                        <Link href="/create-project">Share work</Link>
                    </div>
                ) : (
                    <div>
                        <AuthProviders />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
