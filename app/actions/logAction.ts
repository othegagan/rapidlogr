"use server";
import connectDB from "@/lib/mongodb";
import LogModel from "@/models/logModel";
import { revalidatePath } from "next/cache";

connectDB();

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


export async function insertLogs(logs: any[]) {
    try {
        // If logs is an array, insert multiple logs
        if (Array.isArray(logs)) {
            const insertedLogs = await LogModel.insertMany(logs);
            console.log(`${insertedLogs.length} logs inserted successfully.`);
            revalidatePath("/");
            return insertedLogs;
        } else {
            // If logs is a single log object, insert one log
            const insertedLog = await LogModel.create(logs);
            console.log('Log inserted successfully.');
            revalidatePath("/");
            return insertedLog;
        }
    } catch (error) {
        console.error('Error inserting logs:', error);
        throw new Error('Failed to insert logs into the database.');
    }
}


export async function getAllLogs(searchParams: any) {
    const search = searchParams.search || '';
    const level = searchParams.level || 'all';

    const pipeline: any[] = [];

    // Match based on search parameter
    if (search && search !== '') {
        const regex = new RegExp(search, 'i'); // 'i' for case-insensitive matching
        pipeline.push({
            $match: {
                $or: [
                    { level: { $regex: regex } },
                    { message: { $regex: regex } },
                    { resourceId: { $regex: regex } },
                    { timestamp: { $regex: regex } },
                    { traceId: { $regex: regex } },
                    { spanId: { $regex: regex } },
                    { commit: { $regex: regex } },
                    { 'metadata.parentResourceId': { $regex: regex } },
                ],
            },
        });
    }

    // Add level filter to the pipeline
    if (level !== 'all') {
        pipeline.push({
            $match: {
                level: level,
            },
        });
    }

    pipeline.push({
        $sort: {
            timestamp: -1,
        },
    });

    if (!search || search === '' || search === undefined) {
        pipeline.push({
            $limit: 20,
        });
    }

    try {
        const logs = await LogModel.aggregate(pipeline);
        return logs;
    } catch (error: any) {
        throw new Error(`Failed to fetch logs: ${error.message}`);
    }
}
