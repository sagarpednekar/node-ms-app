"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const getUsers = async (req, res) => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await users.json();
    res.send({
        message: 'Users fetched successfully',
        data: data
    });
};
exports.getUsers = getUsers;
