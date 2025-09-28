import type { Request, Response } from 'express';

export const getUsers = async (req: Request, res: Response) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    res.send({
        message: 'Users fetched successfully',
        data: data
    });
};