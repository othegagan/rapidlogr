import React from "react";
import { ModeToggle } from "./ui/theme-toggle-button";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="mr-4 flex">
                        <Link
                            className="mr-6 flex items-center space-x-2"
                            href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256"
                                className="h-6 w-6">
                                <rect
                                    width="256"
                                    height="256"
                                    fill="none"></rect>
                                <line
                                    x1="208"
                                    y1="128"
                                    x2="128"
                                    y2="208"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"></line>
                                <line
                                    x1="192"
                                    y1="40"
                                    x2="40"
                                    y2="192"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="16"></line>
                            </svg>
                            <span className="font-bold sm:inline-block">
                                rapidlogr
                            </span>
                        </Link>
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
                    </div>

                    

                    <ModeToggle />
                </div>
            </header>
        </>
    );
};

export default Navbar;
