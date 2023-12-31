import { columns } from "@/components/data-table/columns";
import LogsDataTable from "@/components/data-table/data-table";
import { getAllLogs } from "./actions/logAction";

import Footer from "@/components/Footer";

export default async function Home({ params, searchParams }: any) {
    const rawData = await getAllLogs(searchParams);
    const logs = JSON.parse(JSON.stringify(rawData));
    return (
        <>
            <div className="container mx-auto py-4 px-5 md:px-8">
                <LogsDataTable data={logs} columns={columns} />
            </div>

            <Footer />
        </>
    );
}
