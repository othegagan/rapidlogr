import { models, Schema, model } from "mongoose";

const logSchema = new Schema({
    level: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    resourceId: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    traceId: {
        type: String,
        required: true,
    },
    spanId: {
        type: String,
        required: true,
    },
    commit: {
        type: String,
        required: true,
    },
    metadata: {
        parentResourceId: {
            type: String,
        },
    },
});

logSchema.index({
    level: 'text',
    message: 'text',
    resourceId: 'text',
    timestamp: 'text',
    traceId: 'text',
    spanId: 'text',
    commit: 'text',
    'metadata.parentResourceId': 'text'
});

const LogModel = models.Log || model('Log', logSchema, 'logs_collection');


export default LogModel;
