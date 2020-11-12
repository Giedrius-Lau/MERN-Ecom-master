import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin user',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Tom Ridlis',
        email: 'tom@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'This That',
        email: 'This@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;
