import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import UserModel from './models/UserModel.js';
import ProductModel from './models/ProductModel.js';
import OrderModel from './models/OrderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await UserModel.deleteMany();
        await ProductModel.deleteMany();
        await OrderModel.deleteMany();

        const createdUsers = await UserModel.insertMany(users);

        const adminUser = createdUsers[0]._id;

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser };
        });

        await ProductModel.insertMany(sampleProducts);

        console.log('Data Imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const desctroyData = async () => {
    try {
        await UserModel.deleteMany();
        await ProductModel.deleteMany();
        await OrderModel.deleteMany();

        console.log('All data erased!'.red.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    desctroyData();
} else {
    importData();
}
