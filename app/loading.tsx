import { DataTableLoading } from "@/components/data-table/DataTableLoading";
import React from "react";

const loading = () => {
    return (
        <>
            <div className="container mx-auto py-10">
                <DataTableLoading columnCount={7} />
            </div>
        </>
    );
};

export default loading;
