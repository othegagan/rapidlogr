import { DataTableLoading } from "@/components/data-table/DataTableLoading";
import { columns } from "@/components/data-table/columns";
import LogsDataTable from "@/components/data-table/data-table";
import { Suspense, useEffect, useState } from "react";

const getLogs = async () => {
    const response = await fetch("http://localhost:3000/api/logs", { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return data.logs;
};

export default async function Logs() {
    const data = await getLogs();
    return (
        <>
            <Suspense fallback={<DataTableLoading columnCount={7} />}>
                <LogsDataTable data={data} columns={columns} />
            </Suspense>
        </>
    );
}
