import mongoose from "mongoose";

import { IDoc } from "../interfaces/schemaInterfaces.js";

const DocSchema = new mongoose.Schema<IDoc>({

    title: {
        type: String,
        required: [true, "Please Enter a Name"],
        default: "Untitled Document"
    },
    description: {
        type: String,
        default: "Realtime Collaborative Document"
    },
    content: {
        type: String,
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastModified: {
        type: Date,
        default: null
    },
});

const DocModel = mongoose.model<IDoc>("Doc", DocSchema);
export default DocModel;

