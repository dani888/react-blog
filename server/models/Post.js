import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostModel = mongoose.model("post", postSchema);

export default PostModel;
