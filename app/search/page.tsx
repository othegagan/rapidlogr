"use client";

import Searchbar from "@/components/Searchbar";
import { DataTableLoading } from "@/components/data-table/DataTableLoading";
import { columns } from "@/components/data-table/columns";
import LogsDataTable from "@/components/data-table/data-table";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const page = async () => {
    const search = useSearchParams();
    const params = Object.fromEntries(search.entries());

    console.log(params);

    // const encodeSearchQuery = encodeURI(searchQuery || "");

    // const response = await fetch(`/api/logs?level=${encodeSearchQuery}`, {
    //     cache: "no-store"
    // });
    // console.log(process.env.DOMAIN)

    // const data = await response.json();

    // if (!response.ok) {
    //     throw new Error("Failed to fetch data");
    // }

    // console.log(data.logs);

    return (
        <>
            <div className="container mx-auto py-10">
                {/* {params && searchQuery} */}

                <Searchbar />
            </div>
        </>
    );
};

export default page;
