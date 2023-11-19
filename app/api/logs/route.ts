import { MongoClient } from 'mongodb';
import { NextResponse, NextRequest } from 'next/server';
import dotenv from 'dotenv';
import { getAllLogs, insertLogs } from '@/app/actions/logAction';
dotenv.config();


export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        // const level = searchParams.get('level') || '';

        const logs = await getAllLogs("");

        return NextResponse.json({ logs });
    } catch (error: any) {
        console.error('Error processing GET request:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function POST(request: NextRequest, response: NextResponse) {
    try {
        const requestBody = await request.json();
        const insertedLogs = await insertLogs(requestBody);

        return new NextResponse(
            JSON.stringify({
                message: "Logs ingested and saved successfully",
                insertedLogs
            }),
            { status: 201, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error: any) {
        console.error('Error processing POST request:', error);
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
};
