import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";

const FooterColumn = ({ title, links }) => {
    return (
        <div className="mt-4">
            <h1 className="font-bold mb-2">{title}</h1>
            <ul className="flex flex-col justify-center">
                {links.map((link) => (
                    <li key={link}>{link}</li>
                ))}
            </ul>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="flex flex-col mt-10 bg-slate-50 sm:px-8 sm:py-4 px-4 py-2 ">
            <div className="flex flex-col max-w-[400px]  ">
                <Image
                    src="/logo-purple.svg"
                    width={150}
                    height={50}
                    className="object-contain"
                />
                <p className="mt-4">
                    Ye sab kalpanik ghatono pe aadharit hai kripya kar ke apna
                    dhyan rakhe aur baakion ko bhi iske baare main jaagruk
                    karein...
                </p>
            </div>
            <div className="flex flex-wrap gap-10 mt-5 justify-center w-full">
                <div className="flex flex-col">
                    <FooterColumn
                        title={footerLinks[0].title}
                        links={footerLinks[0].links}
                    />
                </div>
                <div className="flex flex-col">
                    <FooterColumn
                        title={footerLinks[1].title}
                        links={footerLinks[1].links}
                    />
                    <FooterColumn
                        title={footerLinks[2].title}
                        links={footerLinks[2].links}
                    />
                </div>
                <div className="flex flex-col">
                    <FooterColumn
                        title={footerLinks[3].title}
                        links={footerLinks[3].links}
                    />
                </div>
                <div className="flex flex-col">
                    <FooterColumn
                        title={footerLinks[4].title}
                        links={footerLinks[4].links}
                    />
                    <FooterColumn
                        title={footerLinks[5].title}
                        links={footerLinks[5].links}
                    />
                </div>
                <div className="flex flex-col">
                    <FooterColumn
                        title={footerLinks[6].title}
                        links={footerLinks[6].links}
                    />
                </div>
            </div>
            <div className=" flex flex-col sm:flex-row justify-between items-center mt-7">
                <span>@Anish Kashyap.com</span>
                <span>
                    <span className="font-semibold">22,345</span> Projects
                    Submitted
                </span>
            </div>
        </footer>
    );
};

export default Footer;
