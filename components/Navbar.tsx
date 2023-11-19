import React from "react";
import { ModeToggle } from "./ui/theme-toggle-button";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container px-5 md:px-8 flex h-14 items-center justify-between">
                    <div className="mr-4 flex">
                        <Link
                            className="mr-6 flex items-center space-x-2"
                            href="/">
                            <svg
                                className="h-6 w-6 rotate-45"
                                viewBox="0 0 24 24"
                                fill="none">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                        d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H17M12 21C7.02944 21 3 16.9706 3 12M12 21V17M3 12C3 7.02944 7.02944 3 12 3M3 12H7M12 3V7M12 12H12.01"
                                        stroke="#000000"
                                        strokeWidth="2.4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>{" "}
                                </g>
                            </svg>

                            <span className="font-bold text-lg sm:inline-block">
                                RapidLogr
                            </span>
                        </Link>
                    </div>

                    <div className=" flex  items-center gap-6">
                        <nav className=" hidden md:flex items-center space-x-6 text-sm font-medium">
                            <Link
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/docs">
                                Documentation
                            </Link>

                            <Link
                                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                                href="https://github.com/othegagan/rapidlogr">
                                GitHub
                            </Link>
                        </nav>
                        <ModeToggle />
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
