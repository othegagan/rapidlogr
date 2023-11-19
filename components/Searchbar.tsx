"use client";

import useCustomRouter from "@/hooks/useCustomRouter";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
    BellIcon,
    Cross2Icon,
    ExclamationTriangleIcon,
    InfoCircledIcon,
    QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import { SkullIcon } from "lucide-react";
import { Badge } from "./ui/badge";

const Searchbar = () => {
    const { pushQuery, query } = useCustomRouter();

    const handleChange = (event: { target: { value: any } }) => {
        const search = event.target.value;
        pushQuery({ search });
    };

    const reset = () => {
        const search = "";
        const level = "";
        pushQuery({ search, level });

        const searchInput = document.getElementById(
            "searchInput"
        ) as HTMLInputElement | null;
        if (searchInput) {
            searchInput.value = "";
        }
        const selectLevelEle = document.getElementsByName(
            "levelFilter"
        )[0] as HTMLSelectElement | null;

        if (selectLevelEle) {
            selectLevelEle.value = "all";
        }
    };

    return (
        <div className=" flex flex-1 gap-10 ">
            <Input
                id="searchInput"
                className=" max-w-xl"
                placeholder="Search logs... 🕵️‍♂️"
                name="search"
                defaultValue={query.search || ""}
                onChange={handleChange}
            />
            <span className="pointer-events-none absolute right-1.5 top-1.5 h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
            </span>

            <Select
                name="levelFilter"
                onValueChange={(value) => {
                    pushQuery({ level: value });
                }}
                defaultValue={query.level || "all"}>
                <SelectTrigger className="w-fit border-dashed">
                    <span className="text-neutral-500 mr-4">Level :</span>
                    <SelectValue placeholder="all" className="" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem
                            value="all"
                            aria-selected="true"
                            className="cursor-pointer">
                            <Badge variant="secondary">All</Badge>
                        </SelectItem>
                        <SelectItem value="error" className="cursor-pointer">
                            <Badge variant="secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    className="mr-2 h-4 w-4 text-red-400"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <line x1="12" y1="8" x2="12" y2="12" />
                                    <line x1="12" y1="16" x2="12" y2="16" />
                                    <line x1="12" y1="12" x2="8" y2="8" />
                                    <line x1="12" y1="12" x2="16" y2="8" />
                                </svg>
                                Error
                            </Badge>
                        </SelectItem>
                        <SelectItem value="warning" className="cursor-pointer">
                            <Badge variant="secondary">
                                <ExclamationTriangleIcon
                                    className="mr-2 h-4 w-4 text-yellow-500"
                                    aria-hidden="true"
                                />
                                Warning
                            </Badge>
                        </SelectItem>
                        <SelectItem value="info" className="cursor-pointer">
                            <Badge variant="secondary">
                                <InfoCircledIcon
                                    className="mr-2 h-4 w-4 text-blue-500"
                                    aria-hidden="true"
                                />
                                Info
                            </Badge>
                        </SelectItem>
                        <SelectItem value="debug" className="cursor-pointer">
                            <Badge variant="secondary">
                                <QuestionMarkCircledIcon
                                    className="mr-2 h-4 w-4 text-gray-500"
                                    aria-hidden="true"
                                />
                                Debug
                            </Badge>
                        </SelectItem>
                        <SelectItem value="critical" className="cursor-pointer">
                            <Badge variant="secondary">
                                <SkullIcon
                                    className="mr-2 h-4 w-4 text-pink-500"
                                    aria-hidden="true"
                                />
                                Critical
                            </Badge>
                        </SelectItem>
                        <SelectItem value="alert" className="cursor-pointer">
                            <Badge variant="secondary">
                                <BellIcon
                                    className="mr-2 h-4 w-4 text-orange-500"
                                    aria-hidden="true"
                                />
                                Alert
                            </Badge>
                        </SelectItem>
                        <SelectItem
                            value="emergency"
                            className="cursor-pointer">
                            <Badge variant="secondary">
                                <ExclamationTriangleIcon
                                    className="mr-2 h-4 w-4 text-red-500"
                                    aria-hidden="true"
                                />
                                Emergency
                            </Badge>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            {((query.search && query.search !== "") ||
                (query.level && query.level !== "")) && (
                <Button
                    aria-label="Reset filters"
                    variant="ghost"
                    className="h-8 px-2 lg:px-3"
                    onClick={reset}>
                    Reset
                    <Cross2Icon className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
            )}
        </div>
    );
};

export default Searchbar;
