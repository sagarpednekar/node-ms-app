import type { Request, Response } from 'express';

export const getPosts = async (req: Request, res: Response) => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json();
    res.send({
        message: 'Posts fetched successfully',
        data: data
    });
};