import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
    {
        title: String,
        desc: String
    },
    {
        timestamps: true
    }
)

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema)
export default Topic;  