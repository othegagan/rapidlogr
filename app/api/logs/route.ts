import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { NextResponse, NextRequest } from 'next/server';
dotenv.config();

const connectToDatabase = async () => {
    try {

        const connectionString = process.env.MONGODB_URI || "";
        const client = new MongoClient(connectionString);

        await client.connect();
        const db = client.db('logs_db');
        return db.collection('logs_collection');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export async function GET(request: NextRequest) {
    try {
        const logsCollection = await connectToDatabase();
        const logs = await logsCollection.find({}).toArray();
        return NextResponse.json({ logs });
    } catch (error) {
        console.error('Error processing GET request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}


export async function POST(request: NextRequest) {
    try {
        const logsCollection = await connectToDatabase();

        // Assuming the request body contains JSON data
        const requestBody = await request.json();

        // Insert the data into the MongoDB collection
        const result = await logsCollection.insertMany(requestBody.logs);

        return new Response(JSON.stringify({ "Message": "Logs ingested and saved successfully" }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error processing POST request:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}