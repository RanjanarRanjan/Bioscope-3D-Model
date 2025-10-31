import mongoose from 'mongoose'

const modelSchema = new mongoose.Schema({
    title: String,
    description: String,
    fileData: String, 
    fileType: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Model", modelSchema)
