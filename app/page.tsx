import Navbar from "@/components/Navbar";
import Logs from "./logs/page";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container py-10 mx-auto">
                <Logs />
            </div>
        </>
    );
}
