"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { ColumnDef } from "@tanstack/react-table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ArrowUpDown,
    CircleIcon,
    MoreHorizontal,
    SkullIcon,
} from "lucide-react";
import {
    InfoCircledIcon,
    BellIcon,
    ExclamationTriangleIcon,
    QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
type LogData = {
    _id: string;
    level: string;
    message: string;
    resourceId: string;
    timestamp: string;
    traceId: string;
    spanId: string;
    commit: string;
    metadata: {
        parentResourceId: string;
    };
};

export const columns: ColumnDef<LogData>[] = [
    {
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc");
                    }}>
                    Level
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const item = row.original;
            const level = item.level;
            if (!level) {
                return level;
            }

            return (
                <div className="flex  items-center">
                    <Badge variant="secondary">
                        {level === "error" ? (
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
                        ) : level === "warning" || level === "warn" ? (
                            <ExclamationTriangleIcon
                                className="mr-2 h-4 w-4 text-yellow-500"
                                aria-hidden="true"
                            />
                        ) : level === "info" ? (
                            <InfoCircledIcon
                                className="mr-2 h-4 w-4 text-blue-500"
                                aria-hidden="true"
                            />
                        ) : level === "debug" ? (
                            <QuestionMarkCircledIcon
                                className="mr-2 h-4 w-4 text-gray-500"
                                aria-hidden="true"
                            />
                        ) : level === "critical" ? (
                            <SkullIcon
                                className="mr-2 h-4 w-4 text-pink-500"
                                aria-hidden="true"
                            />
                        ) : level === "alert" ? (
                            <BellIcon
                                className="mr-2 h-4 w-4 text-orange-500"
                                aria-hidden="true"
                            />
                        ) : level === "emergency" ? (
                            <ExclamationTriangleIcon
                                className="mr-2 h-4 w-4 text-red-500"
                                aria-hidden="true"
                            />
                        ) : (
                            <CircleIcon
                                className="mr-2 h-4 w-4 text-muted-foreground"
                                aria-hidden="true"
                            />
                        )}
                        <span className="capitalize">{level || ""}</span>
                    </Badge>
                </div>
            );
        },
        accessorKey: "level",
    },
    {
        header: "Message",
        accessorKey: "message",
    },
    {
        header: "Resource Id",
        accessorKey: "resourceId",
    },
    {
        header: "Trace Id",
        accessorKey: "traceId",
    },
    {
        header: "Span Id",
        accessorKey: "spanId",
    },
    {
        header: "Commit",
        accessorKey: "commit",
    },
    {
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => {
                        column.toggleSorting(column.getIsSorted() === "asc");
                    }}>
                    Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        accessorKey: "timestamp",
        cell: ({ row }) => {
            const timestamp = row.getValue("timestamp");

            // Format the date as "dd mmm yyyy"
            const options = { day: "2-digit", month: "short", year: "numeric" };
            const formatted = new Date(timestamp as string).toLocaleDateString(
                undefined,
                options as Intl.DateTimeFormatOptions
            );

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        header: "Parent Resource Id",
        accessorKey: "metadata.parentResourceId",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const item = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    item._id.toString()
                                );
                            }}>
                            Copy ID
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            className="cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    item.resourceId.toString()
                                );
                            }}>
                            Copy Resource ID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
