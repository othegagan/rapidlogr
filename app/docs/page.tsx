import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Documentation = () => {
    return (
        <>
            <div className=" px-4 sm:px-6 md:px-8 flex flex-col min-h-screen">
                <div className="max-w-6xl mx-auto">
                    <main className="pt-10">
                        <div className="space-y-4">
                            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
                                RapidLogr: 🚀 A Log Exploration Adventure
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Embark on a journey of log management with
                                RapidLogr, a dynamic application crafted as{" "}
                                <b> part of Dyte Inc.'s hiring project.</b>
                                <div></div> Uncover insights, troubleshoot
                                issues, and navigate logs effortlessly with
                                these stellar features..!
                            </p>
                        </div>

                        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                            Features
                        </h2>
                        <ul className="space-y-4 mt-4 list-decimal">
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>Log Search: 🔍</strong> - Swiftly search
                                through logs with RapidLogr's robust search
                                functionality. - Explore various search
                                parameters to find information in the blink of
                                an eye.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>Severity Filtering: ⚠️</strong> - Filter
                                logs by severity to focus on critical issues or
                                specific levels of importance. - Fine-tune your
                                log analysis with precision.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>Date Range Filtering: 📅</strong> - Dive
                                into log analysis with date range filtering. -
                                Investigate issues that occurred during specific
                                time intervals.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>Mobile Magic: 📱</strong> - RapidLogr is
                                designed to shine on all devices, ensuring a
                                seamless experience on mobile phones and
                                tablets.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>User-Friendly Interface: 🎨</strong> -
                                Navigate logs effortlessly with RapidLogr's
                                clean and intuitive interface. - Experience
                                user-friendly design for efficient log
                                exploration.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>Light and Dark Modes: 🌞🌚: 🎨</strong>{" "}
                                - Customize your log exploration with the choice
                                of light or dark mode. - Tailor your environment
                                to suit your visual preferences.
                            </li>
                            <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                <strong>
                                    Next.js and Tailwind CSS Magic: ⚡
                                </strong>
                                - RapidLogr leverages Next.js for a powerful and
                                efficient frontend. - Tailwind CSS brings
                                flexibility and style, resulting in a sleek and
                                modern design.
                            </li>
                        </ul>

                        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                            Installation
                        </h2>
                        <div className="">
                            <ul className="space-y-4 mt-4 list-decimal">
                                <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Clone the Repository and Open your terminal.
                                </li>
                                <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Install project dependencies using{" "}
                                    <Badge variant="secondary" className="p-2">
                                        {" "}
                                        pnpm install
                                    </Badge>{" "}
                                    or{" "}
                                    <Badge variant="secondary" className="p-2">
                                        {" "}
                                        yarn install
                                    </Badge>{" "}
                                    or{" "}
                                    <Badge variant="secondary" className="p-2">
                                        {" "}
                                        npm install
                                    </Badge>{" "}
                                    choose any of your package manager.
                                </li>
                                <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    Go to mongodb website and create your
                                    account or use the existing one. Create a
                                    new database called{" "}
                                    <Badge
                                        variant="secondary"
                                        className="p-2 bg-green-600 text-white hover:text-neutral-600">
                                        {" "}
                                        logs_db{" "}
                                    </Badge>
                                    .<br />
                                    And create a collection inside called{" "}
                                    <Badge
                                        variant="secondary"
                                        className="p-2 bg-green-600 text-white hover:text-neutral-600">
                                        {" "}
                                        logs_collection
                                    </Badge>
                                    .
                                </li>
                                <li className="leading-7 [&amp;:not(:first-child)]:mt-6">
                                    After succeful creation of db and
                                    collection, copy the MONGODB_URI /
                                    connection string.
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                            Modification
                        </h2>

                        <div className="space-y-4 mt-4 ">
                            <ul className="list-disc leading-[3rem]">
                                <li>
                                    Go to root folder and find{" "}
                                    <Badge variant="secondary" className="p-2">
                                        .env
                                    </Badge>{" "}
                                    file. Add the copied connection string to{" "}
                                    <Badge variant="outline" className="p-2">
                                        MONGODB_URI
                                    </Badge>
                                </li>
                                <li>
                                    Populate the db with logs with specific
                                    format given.{" "}
                                </li>
                                <li>
                                    Start the dev server using{" "}
                                    <Badge className="p-2">pnpm run dev</Badge>{" "}
                                    or{" "}
                                    <Badge className="p-2">npm run dev</Badge>
                                </li>
                            </ul>
                        </div>

                        <p className="px-4 py-2 leading-9 bg-neutral-800 text-neutral-300 rounded-lg w-fit my-8">
                            🔥💥💥💥💥 😎 Start exploring logs by search and
                            using filters.💫 At this point application is ready
                            visit{" "}
                            <span className="underline underline-offset-2 text-white">
                                {" "}
                                http://localhost:3000/
                            </span>
                        </p>

                        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                            Database Interaction
                        </h2>

                        <div className="space-y-4 mt-4 ">
                            <ul className="list-disc leading-[3rem]">
                                <li>
                                    To populate the database, use the endpoint:{" "}
                                    <Badge
                                        variant="outline"
                                        className="p-2 tracking-wide">
                                        http://localhost:3000/api/logs
                                    </Badge>
                                    . Send a POST request to this endpoint to
                                    add logs to the database.
                                </li>
                                <li>
                                    To retrieve logs, send a GET request to the
                                    same endpoint:{" "}
                                    <Badge
                                        variant="outline"
                                        className="p-2 tracking-wide">
                                        http://localhost:3000/api/logs
                                    </Badge>
                                    . You'll receive the logs as a response.
                                </li>
                                <li>
                                    The application utilizes the latest Next.js
                                    server actions for these operations.
                                </li>
                            </ul>
                        </div>

                        <h2 className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
                            Server-Side Filtering and Searching
                        </h2>

                        <div className="space-y-4 mt-4 ">
                            <p className="leading-7">
                                💥 RapidLogr employs server-side filtering and
                                searching for efficient log exploration. The
                                application utilizes MongoDB aggregation to
                                process search parameters and perform advanced
                                queries on the server.
                            </p>
                            <p className="leading-7">
                                😎 This approach enhances performance by
                                fetching and processing data on the server side,
                                delivering faster response times and optimizing
                                resource utilization.
                            </p>
                            <p className="leading-7">
                                😁 Additionally, server-side processing adds
                                extra benefits in terms of scalability and
                                reduces the load on the client, providing a
                                seamless log exploration experience.
                            </p>
                        </div>

                        <p className="px-4 py-2 leading-9 bg-neutral-800 text-neutral-300 rounded-lg w-fit my-8">
                            🎉💻 RapidLogr has been an exciting challenge,
                            offering an awesome experience in log exploration.
                            With a user-friendly interface, server-side magic,
                            and responsive design, it's a log management
                            adventure like no other. 🚀<span className="text-white"> Thanks to Dyte Hiring Team,for giving the challenge..! </span>
                        </p>
                    </main>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default Documentation;
