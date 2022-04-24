import PostModel from "../models/Post.js";
import _ from "lodash";

export const getPosts = async (req, res) => {
  try {
    const post = await PostModel.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostModel(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getSinglePost = async (req, res) => {
  const postTitle = _.lowerCase(req.params.topic);

  PostModel.find({}, (err, postFound) => {
    if (!err) {
      postFound.forEach((element) => {
        if (postTitle === _.lowerCase(element.title)) {
          res.json(element);
        } 
      });
    } else {
      console.error(err);
    }
  });
};
