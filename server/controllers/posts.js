import Post from '../models/Posts.js'

export const getPosts = (req, res) => {
    res.send('Get Posts');
}

export const createPost = (req, res) => {
    res.send('Post Creation')
}