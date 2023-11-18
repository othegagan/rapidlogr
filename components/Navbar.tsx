import React from "react";
import { ModeToggle } from "./ui/theme-toggle-button";

const Navbar = () => {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                    <div className="mr-4 flex">
                        <a
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
                        </a>
                        <nav className=" hidden md:flex items-center space-x-6 text-sm font-medium">
                            <a
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                href="/docs">
                                Documentation
                            </a>

                            <a
                                className="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
                                href="https://github.com/shadcn-ui/ui">
                                GitHub
                            </a>
                        </nav>
                    </div>

                    <div className="hidden md:flex flex-1 items-center justify-between space-x-2 md:justify-end mr-3">
                        <div className="w-full flex-1 md:w-auto md:flex-none relative">
                            <input
                                className="inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
                                placeholder="Seach"
                            />

                            <span className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                                <span className="text-xs">⌘</span>K
                            </span>
                        </div>
                    </div>

                    <ModeToggle />
                </div>
            </header>
        </>
    );
};

export default Navbar;
